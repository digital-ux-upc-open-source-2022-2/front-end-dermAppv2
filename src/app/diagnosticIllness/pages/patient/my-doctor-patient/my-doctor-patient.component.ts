import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Dermatologist} from "../../../model/dermatologist";

@Component({
  selector: 'app-my-doctor-patient',
  templateUrl: './my-doctor-patient.component.html',
  styleUrls: ['./my-doctor-patient.component.css']
})
export class MyDoctorPatientComponent implements OnInit {
  patient: any = {
    name: "as",
    lastName: "asgsa",
    age: 18,
    address: "asg",
    email: "sagsa",
    password: "sgsa",
    urlImage: "sagsa"
  }
  dermatologist?: Dermatologist
  dermatologists?: Array<Dermatologist>
  constructor(private router: Router, private patientService: UserService) { }
  selectDermatologist = false;

  ngOnInit(): void {
    // @ts-ignore
    this.patient = JSON.parse( localStorage.getItem("patient"));
    if(this.patient.dermatologistId !== 0){
      this.getDataDoctor()
      this.selectDermatologist = true;
    }else{
      this.getDataDermatologists()
    }
  }
  getDataDoctor(){
    this.patientService.getDermatologistsById(this.patient!.dermatologistId).subscribe((response)=>{
      // @ts-ignore
      this.dermatologist = response.content;
    })
  }
  getDataDermatologists(){
    this.patientService.getDermatologists().subscribe((response) => {
      // @ts-ignore
      this.dermatologists = response.content;
      console.log(response)
    })
  }
  updatePatient(id: Number){
    this.patient.dermatologistId = id;
    this.patientService.UpdatePatient(this.patient?.id, this.patient).subscribe((response)=>{
      this.selectDermatologist = true;
      localStorage.removeItem("patient");
      localStorage.setItem("patient", JSON.stringify(this.patient));
      this.getDataDoctor()
    })
  }
}
