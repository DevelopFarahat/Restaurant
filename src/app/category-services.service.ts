import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {

  constructor(private http:HttpClient) { 
    
  }
  url:string='https://forkify-api.herokuapp.com/api/search?&q='
  getCategoryPizza():Observable<any>
  {
    return this.http.get(this.url+`pizza`)
  }
  getCategoryPasta():Observable<any>
  {
    return this.http.get(this.url+`pasta`)
  }
  getCategorySalad():Observable<any>
  {
    return this.http.get(this.url+`salad`)
  }
}
