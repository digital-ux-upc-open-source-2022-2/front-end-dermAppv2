import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../diagnosticIllness/services/user.service";

@Component({
  selector: 'app-login-form-dermatologist',
  templateUrl: './login-form-dermatologist.component.html',
  styleUrls: ['./login-form-dermatologist.component.css']
})
export class LoginFormDermatologistComponent implements OnInit {
  hide = true;
  dataDermatologist: any = {
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
      console.log("algo salio mal")
    }else{
      this.patientService.getDermatologists().subscribe((data)=>{
        console.log(this.dataDermatologist.email)
        data.map((e)=>{
          if(e.email === this.dataDermatologist?.email && e.password === this.dataDermatologist?.password){
            this.router.navigate(['patients']).then();
            localStorage.setItem("dermatologist", JSON.stringify(e));
          }
        })
      })
    }
  }
}
