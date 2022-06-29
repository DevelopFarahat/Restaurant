import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb:FormBuilder,private _auth:AuthService) { }

 

  valid:any={
    text:"bg-success"
  }
  invalid:any={
    text:"bg-danger"
  }
  onSubmit()
  {
 console.log(this.loginForm)
   
  }


  loginForm=this.fb.group({
     email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.pattern(/^[0-9]{6}/)]],
    
   
  })
  Email:any=this.loginForm.get('email')?.value
  Password:any=this.loginForm.get('password')?.value
 
  get email()
  {
    return this.loginForm.get('email')

  }
  get password()
  {
    return this.loginForm.get('password')

  }


  get user()
  {
    return this.loginForm.controls
  }

  login(form:any)
  { 

    this._auth.login(form.controls.email.value,form.controls.password.value)
  }
  ngOnInit(): void {
  }

}
