import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component'

import { EmployeeTitlePipe } from './employee/employee-title.pipe';
import { EmployeeCountComponent } from './employee/employee-count.component'
import { SimpleComponent } from './others/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeTitlePipe,
        EmployeeCountComponent,
        SimpleComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
