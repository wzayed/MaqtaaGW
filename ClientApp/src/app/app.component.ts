import { Component, OnInit } from '@angular/core';
import { emptokendto } from './_interfaces/emptokendto';
import { EmplService } from './_services/empl-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';

constructor(private service:EmplService){}
  ngOnInit(): void {
    this.setCurrentUser();
  }

setCurrentUser(){
const usrtokendto:emptokendto = JSON.parse(localStorage.getItem('user') as string);
 this.service.setCurrentUser(usrtokendto);
 console.log(usrtokendto);
}
}