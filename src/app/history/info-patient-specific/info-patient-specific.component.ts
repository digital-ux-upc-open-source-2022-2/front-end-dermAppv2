import { Component, OnInit } from '@angular/core';
import {Patient} from "../../diagnosticIllness/model/patient";
import {PatientsService} from "../../diagnosticIllness/services/patients.service";

@Component({
  selector: 'app-info-patient-specific',
  templateUrl: './info-patient-specific.component.html',
  styleUrls: ['./info-patient-specific.component.css']
})
export class InfoPatientSpecificComponent implements OnInit {
  patientData: Patient;
  constructor(private patientsService: PatientsService) { this.patientData = {} as Patient; }
  a:any=[]
  ngOnInit(): void {
  }
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  showInfoPatient(id:number){
    console.log(id);
    this.patientsService.getById(id).subscribe((response:any)=> {
      this.a.data=response;
      // this.router.navigate(['/infoPatientSpecific'],this.a)
    })
    console.log(this.a);
  }
}
