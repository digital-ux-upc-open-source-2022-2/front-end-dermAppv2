import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../overview/services/user.service";


@Component({
  selector: 'app-edit-profile-dermatologist',
  templateUrl: './edit-profile-dermatologist.component.html',
  styleUrls: ['./edit-profile-dermatologist.component.css']
})
export class EditProfileDermatologistComponent implements OnInit {
  dermatologist: any = {
    name: "as",
    lastName: "asgsa",
    age: 18,
    address: "asg",
    email: "sagsa",
    password: "sgsa",
    dermatologistId: 0,
    urlImage: "sagsa"
  }
  next = true;
  constructor(private router: Router, private dermatologistService: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.dermatologist = JSON.parse( localStorage.getItem("dermatologist"));
    //console.log(this.dermatologist)
  }
  updatePatient(){
    console.log(this.dermatologist.urlImage);
    this.dermatologist.id = 1;
    this.dermatologistService.UpdateDermatologist(this.dermatologist.id, this.dermatologist).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['profile']);
      localStorage.removeItem("dermatologist");
      localStorage.setItem("dermatologist", JSON.stringify(this.dermatologist));
    })
  }
}
