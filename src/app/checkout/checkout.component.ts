import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  ngOnInit(): void {

  }
  
  checkoutForm = this.fb.group({
    fullname:[,[Validators.required,Validators.pattern(/^[a-z A-Z]{3,}\s{1}[a-z A-Z]{3,}/)]],
    email:[,[Validators.required,Validators.pattern(/^[A-Z a-z]+[0-9]+@[A-Z a-z]+(.com|.eg)$/)]],
    cardNumber:[,[Validators.required,Validators.pattern(/^[0-9]{16}$/)]],
    cardName:[,[Validators.required,Validators.pattern(/^[a-z A-Z]{3,}/)]],
    cardCvv:[,[Validators.required,Validators.pattern(/^[0-9]{3}$/)]]
      
  })
 
  get fullname(){

    return this.checkoutForm.get('fullname');
   }
  
   get email(){
    return this.checkoutForm.get('email');
   }
  
   get cardNumber(){
    return this.checkoutForm.get('cardNumber');
   }

   get cardName(){
    return this.checkoutForm.get('cardName');
   }
   get cardCvv(){
    return this.checkoutForm.get('cardCvv');
   }
   NavigateToClientThanks(){
    this.router.navigate(['/checkout-verification']);
  }
  
}
