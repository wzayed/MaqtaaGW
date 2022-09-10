import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../_interfaces/employee';
import { EmplService } from '../_services/empl-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  empl = {} as employee;
  constructor(private service : EmplService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.getEmployeeById(this.route.snapshot.params['id']).subscribe(
      data => {this.empl = data;}
    );
  }
  onDelete(){
    this.service.deleteEmployee(this.route.snapshot.params['id']).subscribe(
      data => {this.router.navigate(["/listemps"]);;});
  }
}
