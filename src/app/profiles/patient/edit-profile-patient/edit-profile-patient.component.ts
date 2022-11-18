import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../diagnosticIllness/services/user.service";

@Component({
  selector: 'app-edit-profile-patient',
  templateUrl: './edit-profile-patient.component.html',
  styleUrls: ['./edit-profile-patient.component.css']
})
export class EditProfilePatientComponent implements OnInit {
  patient: any = {
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
    // @ts-ignore
    this.patient = JSON.parse( localStorage.getItem("patient"));
  }
  updatePatient(id: number){
    console.log(this.patient);
    this.patientService.UpdatePatient(this.patient.id, this.patient).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['profile-patient']);
      localStorage.removeItem("patient");
      localStorage.setItem("patient", JSON.stringify(this.patient));
    })
  }
}
