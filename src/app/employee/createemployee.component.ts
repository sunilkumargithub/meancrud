import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls:  ['./createemployee.component.css']
})

export class CreateEmployeeComponent {
  enteredEmployeeName = 'No Name';
  onAddNewEmployee() {
    //this.enteredEmployeeName = postEmployeeName.value;
  }
}


