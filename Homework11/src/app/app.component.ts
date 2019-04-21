import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
  <app-counter
       [init]="newCount"
       (update)="countChange($event)">
       </app-counter>
  </div>
  <div>Component counter value: {{newCount}}</div>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'Homework11';
  newCount = 0;
  countChange(event) {
this.newCount = event;
  }
}
