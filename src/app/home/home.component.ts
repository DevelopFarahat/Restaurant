import { Component, OnInit } from '@angular/core';

import { CategoryServicesService } from './../category-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pizzaArray:any[]=[]
  pastaArray:any[]=[]
  saladArray:any[]=[]
  constructor(private _CategoryServicesService:CategoryServicesService) {

    this._CategoryServicesService.getCategoryPizza().subscribe((data)=>{
      this.pizzaArray=data.recipes
      this.pizzaArray.splice(6,26)
    })

    this._CategoryServicesService.getCategoryPasta().subscribe((data)=>{
      this.pastaArray=data.recipes
      this.pastaArray.splice(6,26)
    })

    this._CategoryServicesService.getCategorySalad().subscribe((data)=>{
      this.saladArray=data.recipes
      this.saladArray.splice(6,26)
    })
   }


  ngOnInit(): void {
  }

}
