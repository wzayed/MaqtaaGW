import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmplService } from '../_services/empl-service.service';
import { employee } from '../_interfaces/employee';
@Component({
  selector: 'app-empls',
  templateUrl: './empls.component.html',
  styleUrls: ['./empls.component.css']
})
export class EmplsComponent implements OnInit {
  public empls : employee[] =[];

  constructor(private router: Router, private service : EmplService) { }

  ngOnInit(): void {
      this.service.getAllEmployees().subscribe(data => {
      this.empls = data;
  })
}
  
  showEmployee(id: number){
    this.router.navigate(["/showemployee/"+id]);
  }

  updateEmployee(id: number){
    this.router.navigate(["/updateemployee/"+id]);    
  }

  deleteEmployee(id: number){
    this.router.navigate(["/deleteemployee/"+id]);
  }
}
