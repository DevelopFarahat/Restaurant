import { Icategory } from './../shared/iCategory';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

import { CartService } from './../services/cart.service';
import { Bestseller } from '../shared/iCategoryBestseller';
import { Router } from '@angular/router';




@Component({
  selector: 'app-salad-category',
  templateUrl: './salad-category.component.html',
  styleUrls: ['./salad-category.component.css']
})
export class SaladCategoryComponent implements OnInit {
listOfSalad:Icategory;

saladCategory_url:string = "/assets/json/salad.json";
best_seller_icon: string = "/assets/Images/hot.png";
listOfBestSellerFoodDishes: Bestseller[] = [];
priceRange: number = 15;
dishStatus: string = '';
filtarationType:boolean|number;

constructor(private categoryS: CategoryService, private router: Router,private _CartService:CartService) { }

ngOnInit(): void {

  this.categoryS.getAllCategoryDetails(this.saladCategory_url).subscribe((data) => this.listOfSalad = data);

  this.categoryS.getAllCategoryDetails(this.saladCategory_url).subscribe((data) => {

    data.recipes.forEach((item) => {
      if (item.bestSeller == true) {
        this.listOfBestSellerFoodDishes.push(item);
      }
    })

  }
  );
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


  // getAllCategory()
  // {
 
  //   }
    


    
  








}
