import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arr:any[]=["",'']
  flagQun:boolean=false
  categoryList:any[]=[]

  totalPrice:number=0
  constructor(private _CartService:CartService,private router:Router) { }

  increse(category:any)
  {
    category.quntity++
    this._CartService.updatCategory(category)
  }

  decrese(category:any)
  {
    category.quntity--
    this._CartService.updatCategory(category)
  }

  getAllCategory()
  {
    this._CartService.getAllCategory().subscribe((res)=>{
      
      console.log(res);
      this.totalPrice=0
      this.categoryList=res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        this.totalPrice+=+data.quntity*+data.price
        return data;
      })
    }, (err)=>{
      alert("Error Fetching Category")
    }
    


    ) }

    deleteCategory(category:any)
    {
      this._CartService.deleteCategory(category)
    }
  ngOnInit(): void {
    
    this.getAllCategory()
  }
  goToCheckout(){
    this.router.navigate(['/checkout']);
  }

}
