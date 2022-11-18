import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../diagnosticIllness/services/user.service";


@Component({
  selector: 'app-login-form-patient',
  templateUrl: './login-form-patient.component.html',
  styleUrls: ['./login-form-patient.component.css']
})
export class LoginFormPatientComponent implements OnInit {
  hide = true;
  dataPatient: any = {
    name: "",
    lastName: "",
    age: 18,
    address: "",
    email: "",
    password: "",
    urlImage: ""
  }
  next = true;

  constructor(private router: Router, private patientService: UserService) { }

  ngOnInit(): void {

  }
  Login(formTemplate: any){
    if(formTemplate.hasError('required') ){
      console.log("something went wrong")
    }else{
      this.patientService.getPatients().subscribe((data)=>{
        data.map((e)=>{
          if(e.email === this.dataPatient?.email && e.password === this.dataPatient?.password){
            this.router.navigate(['files-patient']).then();
            localStorage.setItem("patient", JSON.stringify(e));
          }
        })
      })
    }
  }
}
