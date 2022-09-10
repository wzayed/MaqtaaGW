import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from '../_interfaces/employee';
import { logindto } from '../_interfaces/logindto';
import { emptokendto } from '../_interfaces/emptokendto';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplService {

  _baseURL: string = "https://localhost:44388/api/MGEmployees";

  private currentUserSource = new ReplaySubject<emptokendto>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get<employee[]>(this._baseURL+"/GetEmployees");
  }

  getEmployeeById(id: number){
    return this.http.get<employee>(this._baseURL+"/GetEmployeeById/"+id);
  }

  addEmployee(empl: employee){
    return this.http.post(this._baseURL+"/AddEmployee/", empl);
  }
  updateEmployee(id : number,empl: employee){
    return this.http.put(this._baseURL+"/Updateemployee/"+empl.idemployee, empl);
  }

  deleteEmployee(id: number){
    return this.http.delete(this._baseURL+"/DeleteEmployee/"+id);
  }
  login(logindtovar: logindto){
    return this.http.post<emptokendto>(this._baseURL+"/login/", logindtovar).
    pipe(map( (response:emptokendto) => {
      const user = response;
      if(user){
        localStorage.setItem("user", JSON.stringify(user));
        
      }
      return user;
    } ));
  }

  setCurrentUser(usertokendto: emptokendto ){
    this.currentUserSource.next(usertokendto);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next({} as emptokendto);
  }
}