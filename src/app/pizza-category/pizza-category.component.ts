import { environment } from './../../environments/environment';

import { Icategory } from '../shared/iCategory';
import { Component, OnChanges, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
import { CartService } from './../services/cart.service';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Bestseller } from '../shared/iCategoryBestseller';
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-pizza-category',
  templateUrl: './pizza-category.component.html',
  styleUrls: ['./pizza-category.component.css']
})
export class PizzaCategoryComponent implements OnInit {
  listOfPizza: Icategory
  best_seller_icon: string = "/assets/Images/hot.png";
  pizzaCategory_url: string = "/assets/json/pizza.json";
  listOfBestSellerFoodDishes: Bestseller[] = [];
  priceRange: number = 15;
  dishStatus: string = '';
  filtarationType:boolean|number;
  isShopClosed:boolean;

  constructor(private categoryS: CategoryService, private router: Router,private _CartService:CartService) {
  
   }

  ngOnInit(): void {

    this.categoryS.getAllCategoryDetails(this.pizzaCategory_url).subscribe((data) => this.listOfPizza = data);

    this.categoryS.getAllCategoryDetails(this.pizzaCategory_url).subscribe((data) => {

      data.recipes.forEach((item) => {
        if (item.bestSeller == true) {
          this.listOfBestSellerFoodDishes.push(item);
        }
      })

    }
    );
    //console.log(new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}));
    //console.log(`${environment.closeTime}` == new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}));
   
  }

  
  addCategory(categoryobj:any)
  {
    console.log(categoryobj);
    
    this._CartService.getAllCategory().subscribe((res)=>{
      let isAdded=res.some((e:any)=>{
        const data = e.payload.doc.data();
        
        if (categoryobj.recipe_id == data.recipe_id) {
          
          return true
        }
        else
        {

         
         
          
          return false
        }
    // console.log(categoryobj);
  
    


  
    
      })
      if (!isAdded) {
        categoryobj.quntity=1
        
        this._CartService.addCategory(categoryobj)
        console.log("data is added");
        
      }
      else
      {
        console.log("data is Notadded");
      }
      
    }, (err)=>{
      alert("Error Fetching Category")
    })
    
   

  
}

  goToProductDetails(recipeId: any) {

    this.router.navigate(['/productDetails', recipeId]);
  }

  changePriceRange(priceValue: string) {
    this.priceRange = Number.parseInt(priceValue);

  }

  changeDishStstus(checkbox: any) {
    if (checkbox.id == 'bestSellerDishes' && checkbox.checked) {
      this.dishStatus = 'bestSeller';
      this.filtarationType = true;
    } else if(checkbox.id == 'newDishes' && checkbox.checked)  {
      this.dishStatus = 'newProduct';
      this.filtarationType = true;
    }else{
      this.dishStatus = 'discount';
      this.filtarationType = 0;
    }
  }



}
