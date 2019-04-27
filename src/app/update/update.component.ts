import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GetService} from '../services/get.service';
import {EmployeeModel} from '../shared/employee.model';
import {EditemployeeService} from '../services/editemployee.service';
import { UpdateService } from '../services/update.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
response;
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  editemp = [];
  employee: EmployeeModel[] = [];
    constructor(private router:Router ,private getservice: GetService,
      private editemployeeservice:EditemployeeService,
    private updateservice: UpdateService
    ) { }

  ngOnInit() {

const getemployee = this.getservice.get();

this.getservice.getresponsesubject.subscribe((response) => {
this.employee = response;
});
//console.log('ngoninit' , this.employee);
  }

  editemployee(employee, index) {
const emp = employee;
this.editemployeeservice.getemployee(emp, index);

  }

  deleteemployee(employee) {
    console.log('delete component employee data', employee);
    const emp = employee;
    this.updateservice.deleteemployee(emp);



      }

}
