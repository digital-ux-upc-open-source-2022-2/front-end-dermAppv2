import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FilesUsers} from "../../../diagnostic/model/files-users";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {ProfilesImgService} from "../../../diagnostic/services/profiles-img.service";
import {UserService} from "../../../diagnostic/services/user.service";

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  hide = true;
  public preview: string | undefined;
  public dataimage1 : string | undefined ;
  public files : any = [];
  dataSource: MatTableDataSource<any>;
  FilesImgData: FilesUsers;
  FilesDataForm: FormGroup;
  next = true;
  dataPatient: any = {
    name: "",
    age: 18,
    address: "",
    email: "",
    password: "",
    dermatologistId: 0,
  }
  isEmpty: boolean = false;
  constructor(private sanitizer: DomSanitizer,
              private router: Router,
              private  rest: ProfilesImgService,
              private patient: UserService,
              private builder: FormBuilder) {
    this.dataSource = new MatTableDataSource<any>();
    this.FilesImgData = {} as FilesUsers;
    this.FilesDataForm = this.builder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      email: [''],
      password: ['', Validators.required],
      urlImage: ['', Validators.required]
    })
  }
  get name(){ return this.FilesDataForm.controls['name'] }
  get lastName(){ return this.FilesDataForm.controls['lastName'] }
  get age(){ return this.FilesDataForm.controls['age'] }
  get gender(){ return this.FilesDataForm.controls['gender'] }
  get address(){ return this.FilesDataForm.controls['address'] }
  get email(){ return this.FilesDataForm.controls['email'] }
  get password(){ return this.FilesDataForm.controls['password'] }
  get urlImage(){ return this.FilesDataForm.controls['urlImage'] }

  ngOnInit(): void {
  }
  capture_file(event: any){
    const capture_image = event.target.files[0];
    this.extractBase64(capture_image).then((image :any) => {
      this.preview = image.base;
      this.dataimage1 = event.target.files[0].name;
    })
    this.files.push(capture_image);
  }
  extractBase64 = async ($event:any) => new Promise((resolve, reject)=>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error =>{
        resolve({
          base:null
        });
      };
    } catch (e){
      return ;
    }
  })
  Uploadfile(): any{
    try {

      const formData = new FormData();
      this.files.forEach((file :any)  => {
        formData.append('files', file)

        this.rest.create(this.FilesDataForm.value)
          .subscribe(res => {

            console.log(this.FilesDataForm.value);
            console.log('correct',res);
          })
      })


    } catch (e){
      console.log('Error', e);
    }
  }
  register(formTemplate: any){
    if(formTemplate.hasError('required') ){
      console.log("Something went wrong")
    }else{
      this.patient.getPatients().subscribe((data)=>{
        // @ts-ignore
        data.content.map((e)=>{
          if(e.email === this.dataPatient?.email){
            this.next = false;
          }
        })

        if(this.next){
          this.patient.CreatePatient(this.dataPatient).subscribe((response) =>{
            console.log(response);
          })
          this.router.navigate(['login-patient']).then();
          localStorage.setItem("patient", JSON.parse(this.dataPatient));
        }
        // @ts-ignore
        console.log(data.content);
      })
    }
  }

}
