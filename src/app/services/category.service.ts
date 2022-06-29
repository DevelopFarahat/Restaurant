import { IproductDetails } from './../shared/iProductDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Icategory} from "../shared/iCategory";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  
  

  getAllCategoryDetails(url:string):Observable<Icategory>{

    return this.http.get<Icategory>(url);

  }

  

  getSpecificProductDetails(url:string):Observable<IproductDetails>{
    return this.http.get<IproductDetails>(url);
  }

}
