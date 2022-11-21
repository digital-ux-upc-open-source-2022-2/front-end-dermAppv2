import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Pusher from 'pusher-js';

@Component({
  selector: 'app-messages-patient',
  templateUrl: './messages-patient.component.html',
  styleUrls: ['./messages-patient.component.css']
})
export class MessagesPatientComponent implements OnInit {
  username = 'username';
  message = 'message';
  messages = [
    {
      'user' : 'username',
      'chat' : 'Hello',
    },
    {
      'user' : 'Diego',
      'chat' : 'Good afternoon'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('8ed0f0664b3a3add7250', {
      cluster: 'us2'
    });
    //create the backend my channel
    /*const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
    });
    */
  }

  submit(): void{
     this.http.post('http://localhost:4200/api/messages', {
       username: this.username,
       message: this.message
     }).subscribe(()=>this.message= '');
  }
}
