import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employee } from '../_interfaces/employee';
import { EmplService } from '../_services/empl-service.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  empl = {} as employee;
  constructor(private service : EmplService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.service.getEmployeeById(this.route.snapshot.params['id']).subscribe(
      data => {this.empl = data;}
    );
  }

}
