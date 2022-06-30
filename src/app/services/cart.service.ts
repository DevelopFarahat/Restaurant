import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore) { }


  addCategory(category:any)
  {
    category.id = this.fs.createId();
    let ref = this.fs.collection("/userBasket").doc(category.id)
      return ref.set(category)
    
  //  return this.fs.collection("/UsersBaskets/90z3Cl1wLkBlbOu9HYOn/userBasket").add(category)
  }

  getAllCategory()
{
  return this.fs.collection("/userBasket").snapshotChanges();
}

  deleteCategory(category:any)
  {  
    let ref = this.fs.collection("/userBasket").doc(category.id)
    
    return ref.delete()
  }



  // Updat Category
  // updatCategory(category:any)
  // {
  //   this.deleteCategory(category)
  //   this.addCategory(category)
  // }

  updatCategory(category:any)
  {
    let ref = this.fs.collection("/userBasket").doc(category.id)
    
    return ref.update(category)
  }
}



