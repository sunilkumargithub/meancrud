import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription, Subject } from 'rxjs';
import {EditemployeeService} from '../../services/editemployee.service';
import { EventEmitter } from 'events';
import { UpdateService } from '../../services/update.service';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  responsemessage;
  subscription: Subscription;
  Employee = [];
  mission = '<no mission announced>';
  constructor(private editemployeeservice: EditemployeeService,
  private updateservice: UpdateService) {}



  ngOnInit() {
this.editemployeeservice.employeesub.subscribe((employee: any[]) => {
this.Employee = employee;
  console.log('target employee' , this.Employee);
  console.log('target employee name' , );
});

this.updateservice.responsesub.subscribe((response) => {this.responsemessage = response; });
  }

onupdate(update: NgForm) {
const updatevalue = update.value;
  const id = updatevalue._id;
this.updateservice.updateEmployee(updatevalue, id);

}


}
