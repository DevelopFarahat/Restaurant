import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {IreservedTable} from '../shared/iReservedTable';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }


  getUsername(){
    return this.afs.collection('/login').snapshotChanges();
  }

  addReservation(reservedTable:IreservedTable){
    return this.afs.collection('/reservedTable').add(reservedTable);
  }

  getAllAppointments(){
  return this.afs.collection('/reservedTable').valueChanges();
  }
}


