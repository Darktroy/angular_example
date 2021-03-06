import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `<ul *ngFor="let emp of employees">
                <li>{{emp.id}} . {{emp.name}}</li> 
</ul>
`,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {
    public employees = [];


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
        this.employees = this._employeeService.getEmployees();
  }
}
