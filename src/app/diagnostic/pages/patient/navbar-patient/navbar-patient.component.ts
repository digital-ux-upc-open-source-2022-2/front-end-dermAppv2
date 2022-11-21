import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-patient',
  templateUrl: './navbar-patient.component.html',
  styleUrls: ['./navbar-patient.component.css']
})
export class NavbarPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    { path: '/home-patient', title: 'Home'},
    { path: '/files-patient', title: 'Files'},
    { path: '/myDoctor-patient', title: 'My Doctor'},
    { path: '/messages-patient', title: 'Messages'},
    { path: '/reminders-patient', title: 'Reminders'},
    { path: '/profile-patient', title: 'Profile'},
  ]

}
