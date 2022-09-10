import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmplsComponent } from './empls/empls.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { AuthInterceptorService } from './_services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NotFoundComponent,
    EmplsComponent,
    ShowEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    NewEmployeeComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'listemps', component: EmplsComponent},
      { path: 'newemployee', component: NewEmployeeComponent},      
      { path: 'showemployee/:id', component: ShowEmployeeComponent},
      { path: 'deleteemployee/:id', component: DeleteEmployeeComponent},
      { path: 'updateemployee/:id', component: UpdateEmployeeComponent},
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
