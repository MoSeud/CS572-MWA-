import { IsVisibleDirective } from './is-visible.directive';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <p [ngStyle]= "{ 'font-size': '20px'}" appMakeItBigger>
      {{ Student.name }}
    </p>
    `,
  styles: []
})
export class DumpComponent implements OnInit {
@Input() Student;
  constructor() { }

  ngOnInit() {
  }

}
