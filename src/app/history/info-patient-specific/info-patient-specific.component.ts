import { Component, OnInit } from '@angular/core';
import {Patient} from "../../diagnosticIllness/model/patient";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../diagnosticIllness/services/user.service";
import {toInteger} from "lodash";

@Component({
  selector: 'app-info-patient-specific',
  templateUrl: './info-patient-specific.component.html',
  styleUrls: ['./info-patient-specific.component.css']
})
export class InfoPatientSpecificComponent implements OnInit {
  patient: any = {
    name: "",
    lastName: "",
    age: 18,
    address: "",
    email: "",
    dermatologistId: 0,
    diagnostic: "",
    treatment: "",
    status: "",
    description: "",
    urlImage: "",
  }
  next = true;
  patientData: Patient;
  constructor(private router: Router, private route: ActivatedRoute, private patientService: UserService) { this.patientData = {} as Patient; }
  ngOnInit(): void {
    this.showInfoPatient()
  }
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  showInfoPatient(){
    console.log(this.route.snapshot.paramMap.get('id'));
    this.patientService.getPatientById(toInteger(this.route.snapshot.paramMap.get('id'))).subscribe((response:any)=> {
      this.patient = response;
    })
  }
  updatePatient(id : number){
    this.patientService.UpdatePatient(id, this.patient).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['patients']);
      localStorage.removeItem("patient");
      localStorage.setItem("patient", JSON.stringify(this.patient));
    })
  }
}
