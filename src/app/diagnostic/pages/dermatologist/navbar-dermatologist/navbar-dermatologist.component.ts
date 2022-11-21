import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-dermatologist',
  templateUrl: './navbar-dermatologist.component.html',
  styleUrls: ['./navbar-dermatologist.component.css']
})
export class NavbarDermatologistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options = [
    { path: '/chats', title: 'Chats'},
    { path: '/analytics', title: 'Analytics'},
    { path: '/calendar', title: 'Calendar'},
    { path: '/patients', title: 'Patients'},
    { path: '/profile', title: 'Profile'},
  ]

}
