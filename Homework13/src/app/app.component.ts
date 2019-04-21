import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <a [routerLink]="['/']">Users</a>`
})
export class AppComponent {
  title = 'Homework13';
}
