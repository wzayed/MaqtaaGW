import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EmplService } from '../_services/empl-service.service';
import { emptokendto } from '../_interfaces/emptokendto';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  usrdto = {} as emptokendto;
  constructor(private authService: EmplService) {} 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //Add the authorization token to the header
   
     this.usrdto =JSON.parse(localStorage.getItem('user') as string);
     if(this.usrdto)
     {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.usrdto.token}`
      }
    });
  }

    return next.handle(req);
  }
}
