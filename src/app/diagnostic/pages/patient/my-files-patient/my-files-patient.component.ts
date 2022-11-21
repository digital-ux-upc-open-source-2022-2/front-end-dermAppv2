import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { FilesUsers } from 'src/app/diagnostic/model/files-users';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import { ProfilesImgService } from 'src/app/diagnostic/services/profiles-img.service';
import { UserService } from 'src/app/diagnostic/services/user.service';

@Component({
  selector: 'app-my-files-patient',
  templateUrl: './my-files-patient.component.html',
  styleUrls: ['./my-files-patient.component.css']
})
export class MyFilesPatientComponent implements OnInit {
  hide = true;
  public preview: string | undefined;
  public dataimage1 : string | undefined ;
  public files : any = [];
  dataSource: MatTableDataSource<any>;
  FilesImgData: FilesUsers;
  FilesDataForm: FormGroup;
  next = true;
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
      address: ['', Validators.required],
      email: [''],
      password: ['', Validators.required],
      urlImage: ['', Validators.required]
    })
  }
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
}
