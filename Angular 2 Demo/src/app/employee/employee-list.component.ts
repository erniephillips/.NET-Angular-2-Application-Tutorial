import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { of } from 'rxjs/observable/of';

@Component({
    templateUrl: 'app/employee/employee-list.component.html',
    styleUrls: ['app/employee/employee-list.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    
    //by default show all employees
    selectedEmployeeCountRadioButton: string = 'All';

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    employees: IEmployee[] = null;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData, (error) => {
                this.statusMessage = "Problem with the service. Please try again later."
            });
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '12/15/1980' }
        ]
    }

    //method for tracking existing array indexes so refresh button only refreshes new data
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    } 

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
}