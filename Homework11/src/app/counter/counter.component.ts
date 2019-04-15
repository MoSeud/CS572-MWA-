import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <div class="counter">
   <button (click)="Decrease()">-</button>
   <input type="text" [value]="count">
   <button (click)="Increase()">+</button>
   </div>
  `,
  styles: [
    `input {
      border : 0;
      height: 30px;
      max-width:100px;
      text-align: center;
    }
    button{
      height: 35px;
      width: 100px;
      background:lightblue;
    }
    `
  ]
})
export class CounterComponent {
@Input('init')
   count = 0;
@Output('update')
Change: EventEmitter<number> = new EventEmitter<number>();

 Decrease() {
   this.count--;
   this.Change.emit(this.count);
 }
 Increase() {
   this.count++;
   this.Change.emit(this.count);
 }
}
