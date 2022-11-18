import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-schedule-dermatologist',
  templateUrl: './schedule-dermatologist.component.html',
  styleUrls: ['./schedule-dermatologist.component.css']
})
export class ScheduleDermatologistComponent implements OnInit {

  constructor(private router: Router, private dermatologistService: UserService) { }

  ngOnInit(): void {
    //@ts-ignore
    this.patient = JSON.parse(localStorage.getItem("patient"));
  }
  get selected(): Date | null {
    return this._selected;
  }

  set selected(value: Date | null) {
    this._selected = value;
  }
  // @ts-ignore
  private _selected: Date | null;

  horarios=[
    {
      'range':'08:00am - 08:30am',
    },
    {
      'range':'08:30am - 09:00am',
    },
    {
      'range':'09:00am - 09:30am',
    },
    {
      'range':'09:30am - 10:00am',
    },
    {
      'range':'10:00am - 10:30am',
    },
    {
      'range':'10:30am - 11:00am',
    },
    {
      'range':'11:00am - 11:30am',
    },
    {
      'range':'11:30am - 12:00pm',
    },
    {
      'range':'02:00pm - 02:30pm',
    },
    {
      'range':'02:30pm - 03:00pm',
    }
  ]
  patient: any = {
    name: ""
  }
  next = true;

}
