import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../diagnostic/services/user.service";


@Component({
  selector: 'app-edit-profile-dermatologist',
  templateUrl: './edit-profile-dermatologist.component.html',
  styleUrls: ['./edit-profile-dermatologist.component.css']
})
export class EditProfileDermatologistComponent implements OnInit {
  dermatologist: any = {
    name: "",
    age: 18,
    address: "",
    email: "",
    password: "",
    dermatologistId: 0,
    urlImage: ""
  }
  next = true;
  constructor(private router: Router, private dermatologistService: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.dermatologist = JSON.parse( localStorage.getItem("dermatologist"));
    //console.log(this.dermatologist)
  }
  updatePatient(id: number){
    console.log(this.dermatologist.urlImage);
    this.dermatologistService.UpdateDermatologist(this.dermatologist.id, this.dermatologist).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['profile']);
      localStorage.removeItem("dermatologist");
      localStorage.setItem("dermatologist", JSON.stringify(this.dermatologist));
    })
  }
}
