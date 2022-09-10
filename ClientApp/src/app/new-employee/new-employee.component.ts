import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmplService } from '../_services/empl-service.service';
import { employee } from '../_interfaces/employee';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  //addEmpForm: FormGroup ;
  showError: boolean = false;
  empl = {} as employee ;

  constructor(private service: EmplService, private router: Router) { }

  ngOnInit() {

    // The Following will consume time to implement
  /*  this.addEmpForm = this.fb.group({          
    })*/
  }
    onSubmit(){
      this.service.addEmployee(this.empl).subscribe(data => {
        this.router.navigate(["/listemps"]);
      }, error => {
        this.showError = true;
      })
    }
}