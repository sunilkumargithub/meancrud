import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private router: Router) {}

createemployee() {
this.router.navigate(['create']);
}
updateemployee() {
  this.router.navigate(['update']);
  }

  deleteemployee() {
    this.router.navigate(['delete']);
    }
    editemployee() {
      this.router.navigate(['editemployee']);
      }
}

