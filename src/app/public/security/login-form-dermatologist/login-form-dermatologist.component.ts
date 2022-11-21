import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../diagnostic/services/user.service";

@Component({
  selector: 'app-login-form-dermatologist',
  templateUrl: './login-form-dermatologist.component.html',
  styleUrls: ['./login-form-dermatologist.component.css']
})
export class LoginFormDermatologistComponent implements OnInit {
  hide = true;
  dataDermatologist: any = {
    name: "",
    age: 18,
    address: "",
    email: "",
    password: "",
  }
  next = true;
  constructor(private router: Router, private dermatologistService: UserService) { }

  ngOnInit(): void {
  }
  Login(formTemplate: any){
    if(formTemplate.hasError('required') ){
      console.log("something went wrong")
    }else{
      this.dermatologistService.getDermatologists().subscribe((data)=>{
        console.log(this.dataDermatologist.email)
        // @ts-ignore
        data.content.map((e)=>{
          if(e.email === this.dataDermatologist?.email && e.password === this.dataDermatologist?.password){
            this.router.navigate(['patients']).then();
            localStorage.setItem("dermatologist", JSON.stringify(e));
          }
        })
        // @ts-ignore
        console.log(data.content);
      })
    }
  }
}
