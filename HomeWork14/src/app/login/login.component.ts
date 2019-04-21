import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 myForm: FormGroup;
  constructor(private formBuilder: FormBuilder ) {
    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Mohammed', [Validators.required]],
        'password': ['', Validators.required],
      }),

      'remember': ['']
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
   }

   onSubmit() {
    console.log(this.myForm);
  }

}
