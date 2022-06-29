import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from './../ConfirmPasswordValidator/ConfirmPasswordValidator';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(private fb:FormBuilder,private _auth:AuthService) { }

  

  valid:any={
    text:"bg-success"
  }
  invalid:any={
    text:"bg-danger"
  }
  onSubmit()
  {
 console.log(this.registerForm)
   
  }


  registerForm=this.fb.group({
    fullName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/)]],
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.pattern(/^[0-9]{6}/)]],
    
    confirmPassword: ['',[Validators.required,Validators.pattern(/^[0-9]{6}/)]],
   
  },{validator:[ConfirmPasswordValidator]})


  Email:any=this.registerForm.get('email')?.value
  Password:any=this.registerForm.get('password')?.value
  get name()
  {
    return this.registerForm.get('fullName')
  }
  get email()
  {
    return this.registerForm.get('email')

  }



  get user()
  {
    return this.registerForm.controls
  }


  register(form:any)
  {
    console.log(form.controls.email.value);
    console.log(form.controls.password.value);
    
    this._auth.register(form.controls.email.value,form.controls.password.value)
  }

  ngOnInit(): void {
   
  }

}
