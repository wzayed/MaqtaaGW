import { Component, OnInit } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { emptokendto } from '../_interfaces/emptokendto';
import { logindto } from '../_interfaces/logindto';
import { EmplService } from '../_services/empl-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  logindto = {} as  logindto;
  emptokenvar = {} as emptokendto;
  isloggedin = false;

  
  
  constructor(private service:EmplService){}
  ngOnInit(): void {
    this.getCurrentUser();

  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  login(){
    this.service.login(this.logindto).subscribe(
      data => {this.emptokenvar = data;
      this.isloggedin = true;
      }
      );
      
  }
  logout(){
    this.isloggedin = false;  
    this.service.logout();
  }
  getCurrentUser(){
    this.service.currentUser$.subscribe(user => {this.isloggedin= !!user ;});
  }
}
