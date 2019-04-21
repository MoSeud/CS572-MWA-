import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
   <ul >
  <app-dump *ngFor="let stud of Students"  [Student]="stud" isVisible [isVisible]="Students.Show"> {{stud.name}}</app-dump>
   </ul>
   <p isVisible [isVisible]="false">True</p>
   <p isVisible="false">False</p>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
 Students = [{name: "Mohammed", Show:true },{name: "Charles", Show: true },{ name:"Vorleak", Show: false}]
  constructor() { }

  ngOnInit() {
  }

}
