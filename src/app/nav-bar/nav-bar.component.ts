import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
show:boolean=true
hide:boolean=false
  constructor(private _auth:AuthService) { 
    if (localStorage.getItem('token') == null) {
        this.hide=false
    }
    else
    {
      this.show=true
    }
  }

logOut()
{
  this.show=false
  this.hide=true
  this._auth.signOut()
}


  ngOnInit(): void {
  }

}
