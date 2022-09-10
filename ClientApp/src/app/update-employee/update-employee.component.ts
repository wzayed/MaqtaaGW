import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../_interfaces/employee';
import { EmplService } from '../_services/empl-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empl = {} as employee
  constructor(private service : EmplService, private route : ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.service.getEmployeeById(this.route.snapshot.params['id']).subscribe(
      data => {this.empl = data;}
    );
  }
  onEmpupdate(){
    this.service.updateEmployee(this.route.snapshot.params['id'], this.empl).subscribe(data => {
      this.router.navigate(["/listemps"]);
    }, error => {      
    })
  }
}