import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee-list.component.css']
})

export class EmployeeComponent {
    firstName: string = "Ernie";
    lastName: string = "Phillips";
    gender: string = "Male";
    age: number = 33;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}