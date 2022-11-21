import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FilesUsers} from "../../../diagnostic/model/files-users";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProfilesImgService} from "../../../diagnostic/services/profiles-img.service";
import {UserService} from "../../../diagnostic/services/user.service";

@Component({
  selector: 'app-register-dermatologist',
  templateUrl: './register-dermatologist.component.html',
  styleUrls: ['./register-dermatologist.component.css']
})
export class RegisterDermatologistComponent implements OnInit {
  hide = true;
  public preview: string | undefined;
  public dataimage1 : string | undefined ;
  public files : any = [];
  dataSource: MatTableDataSource<any>;
  FilesImgData: FilesUsers;
  FilesImgDataForm: FormGroup;dataDermatologist: any = {
    name: "",
    age: 18,
    address: "",
    email: "",
    password: "",
  }
  next = true;
  isEmpty: boolean = false;

  constructor(private router: Router,
              private dermatologistService: UserService,
              private sanitizer: DomSanitizer,
              private  rest: ProfilesImgService,
              private builder: FormBuilder) {
    this.dataSource = new MatTableDataSource<any>();
    this.FilesImgData = {} as FilesUsers;
    this.FilesImgDataForm = this.builder.group({
      firstname: ['', Validators.required],
      specialty: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      location: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get firstname(){ return this.FilesImgDataForm.controls['firstname'] }
  get specialty(){ return this.FilesImgDataForm.controls['specialty'] }
  get gender(){ return this.FilesImgDataForm.controls['gender'] }
  get lastname(){ return this.FilesImgDataForm.controls['lastname'] }
  get age(){ return this.FilesImgDataForm.controls['age'] }
  get location(){ return this.FilesImgDataForm.controls['location'] }
  get email(){ return this.FilesImgDataForm.controls['email'] }
  get password(){ return this.FilesImgDataForm.controls['password'] }

  ngOnInit(): void {
  }
  options = [
    { path: '/home', title: 'Home'},
  ]
  capture_file(event: any){
    const capture_image = event.target.files[0];
    this.extractBase64(capture_image).then((image :any) => {
      this.preview = image.base;
      this.dataimage1 = event.target.files[0].name;
    })
    this.files.push(capture_image);
  }
  Uploadfile(): any{
    try {

      const formData = new FormData();
      this.files.forEach((file :any)  => {
        formData.append('files', file)

        this.rest.create(this.FilesImgDataForm.value)
          .subscribe(res => {

            console.log(this.FilesImgDataForm.value);
            console.log('correct',res);
          })
      })


    } catch (e){
      console.log('Error', e);
    }
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

  register(formTemplate: any){
    if(formTemplate.hasError('required') ){
      console.log("Something went wrong")
    }else{
      this.dermatologistService.getDermatologists().subscribe((data)=>{
        // @ts-ignore
        data.content.map((e)=>{
          if(e.email === this.dataDermatologist?.email){
            this.next = false;
          }
        })
        if(this.next){
          this.dermatologistService.CreateDermatologists(this.dataDermatologist).subscribe((response) =>{
            console.log(response);
          })
          this.router.navigate(['login-dermatologist']).then();
          //localStorage.setItem("dermatologist", JSON.parse(this.dataDermatologist))
        }
        // @ts-ignore
        console.log(data.content);
      })
    }
  }
}
