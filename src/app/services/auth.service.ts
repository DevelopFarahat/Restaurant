import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private _Router:Router,private fs:AngularFirestore) { 


  
  }

  login(email:string,password:string)
  {
    this.fireauth.signInWithEmailAndPassword(email,password).then((userCredential)=>{
      let user = userCredential.user;
      localStorage.setItem("token",JSON.stringify(user?.uid))
      this._Router.navigate(["/home"])
    },(err)=>{
      alert("Something went wrong")
      this._Router.navigate(["/login"])
    })
  } 

  register(email:string,password:string)
  {

    this.fireauth.createUserWithEmailAndPassword(email,password).then((userCredential)=>{
      let user = userCredential.user;
      let ref = this.fs.collection("/FoodUsers").doc(user?.uid)
      // ref.set(userInfo)
      
      alert("Registration Successfully")
      this._Router.navigate(["/login"])
    },(err)=>{
      alert(err.message)
      this._Router.navigate(["/register"])
    })

  } 


  signOut()
  {
    // this.fireauth.signOut().then(()=>{
     
    // },(err)=>{
    //   alert(err.message)
    // })
    localStorage.removeItem("token")
    this._Router.navigate(["/login"])
  }



}
