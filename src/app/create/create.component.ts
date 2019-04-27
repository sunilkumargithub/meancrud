import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateService } from '../services/create.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  subscription: Subscription;
Response;

  constructor(private createservice: CreateService) { }

  ngOnInit() {
this.createservice.onchangestatus.subscribe(res => this.Response = res);

  }

oncreate(employee: NgForm) {
  console.log(employee);

this.createservice.getemployee(employee.value);


}


}
