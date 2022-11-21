import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../diagnostic/model/patient";

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  patient?: Patient
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.patient = JSON.parse( localStorage.getItem("patient"));
  }

}
