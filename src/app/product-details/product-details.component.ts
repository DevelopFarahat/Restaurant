import { IproductDetails } from './../shared/iProductDetails';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  recipeId:string | null;
  dishId:string|null;
  productDetails:IproductDetails;
  currentRoute:{}= {};
  constructor(private acivateRouter:ActivatedRoute,private router:Router,private categoryS:CategoryService) {
    
  }

  ngOnInit(): void {
    this.acivateRouter.paramMap.subscribe((param:ParamMap)=>{
      this.recipeId = param.get("id");
    });
    this.categoryS.getSpecificProductDetails(`https://forkify-api.herokuapp.com/api/get?rId=${this.recipeId}`).subscribe((data)=> this.productDetails = data);
    
  }


}
