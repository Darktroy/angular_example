import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
template: `<ul *ngFor="let emp of employees">
                <li>{{emp.name}}</li> 
</ul>
`,
  styles: []
})
export class EmployeelistComponent implements OnInit {
    public employees = [];


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
        this.employees = this._employeeService.getEmployees();
  }

}
