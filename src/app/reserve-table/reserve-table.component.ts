import { IreservedTable } from './../shared/iReservedTable';
import { DataService } from './../services/data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.component.html',
  styleUrls: ['./reserve-table.component.css'],
})
export class ReserveTableComponent implements OnInit {
  numOfPepoleArr: string[];
  timeAvaliableArr: string[];
  showValidationUi: boolean;
  validationMessage: string;
  warningIcon: string;
  reservedTableList: string[] = [];
  reservedTableObji: IreservedTable = {
    clientName: '',
    appointment: '',
    nPeople: '',
    firstName:'',
    lastName:'',
    email:'',
    mobile:'',
    occasion:'',
    seatType:''
  };
  isThatAppointmentReserved: boolean;
  isUserFoundATable:boolean;
  hideSeatingType:boolean;
  seatingType:string;
  numOfPeople:string;
  rTime:string;
  rDate:string;
  standeredSeatingMaxCapacity:number;
  highTopMaxCapacity:number;
  outdoorMaxCapacity:number;
  isStanderedSeatingreachedMaximumCapacity:boolean;
  ishighTopSeatingreachedMaximumCapacity:boolean;
  isOutdoorSeatingreachedMaximumCapacity:boolean;
  standredSeatingNumPeopleExist:number;
  highTopNumPeopleExist:number;
  outdoorNumPeopleExist:number;
  btnStatus:string;
  occasionArr:string[];
  isUserMadeAreservation:boolean;
  @ViewChild('numberOfPeople') numberOfPeople: ElementRef;
  @ViewChild('dateTxt') ReservationDate: ElementRef;
  @ViewChild('appointment') reservationTime: ElementRef;
  @ViewChild('standeredBtn') standeredBtn: ElementRef;
  @ViewChild('highTopBtn') highTopBtn: ElementRef;
  @ViewChild('outdoorBtn') outdoorBtn: ElementRef;
  @ViewChild('firstname') firstName: ElementRef;
  @ViewChild('lastName') lastName: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('mobile') mobile: ElementRef;
  @ViewChild('occasion') occation: ElementRef;

  constructor(private date: DataService,private fb:FormBuilder,private router:Router) {
    this.numOfPepoleArr = [];
    this.timeAvaliableArr = [
      '10:00 PM',
      '10:30 PM',
      '11:00 PM',
      '11:30 PM',
      '12:00 AM',
      '12:30 AM',
      '1:00 AM',
      '1:30 AM',
      '2:00 AM',
    ];
    this.showValidationUi = false;
    this.validationMessage = '';
    this.warningIcon = '/assets/Images/warning.png';
    this.reservedTableList = [];
    this.isThatAppointmentReserved = false;
    this.isUserFoundATable = false;
    this.hideSeatingType = true;
    this.seatingType = '';
    this.numOfPeople = '';
    this.rTime = '';
    this.rDate = '';
    this.standeredSeatingMaxCapacity = 5;
    this.highTopMaxCapacity = 5;
    this.outdoorMaxCapacity = 5;
    this.isStanderedSeatingreachedMaximumCapacity = false;
    this.ishighTopSeatingreachedMaximumCapacity = false;
    this.isOutdoorSeatingreachedMaximumCapacity = false;
    this.standredSeatingNumPeopleExist = 0;
    this.highTopNumPeopleExist = 0;
    this.outdoorMaxCapacity = 0;
    this.btnStatus = '';
    this.occasionArr = [
      "None",
      "birthday",
      "Anniversary",
      "Date",
      "Special Occasion",
      "Business Meal"
    ]

    this.isUserMadeAreservation = false;
  }

  ngOnInit(): void {
    this.fillNumOfPepoleArr();
    this.date.getAllAppointments().subscribe((res: any) => {
      this.reservedTableList = res;
      return this.reservedTableList;
    });
  }

  fillNumOfPepoleArr() {
    for (let i = 0; i < 5; i++) {
      this.numOfPepoleArr[i] = i + 1 + ' ' + 'people';
    }
  }
  validateReservedTableFormInput(): boolean {
    const reservationDate = this.ReservationDate.nativeElement.value;
    if (
      new Date(reservationDate).toLocaleDateString() !=
        new Date().toLocaleDateString() ||
      this.numberOfPeople.nativeElement.value == '' ||
      this.reservationTime.nativeElement.value == ''
    ) {
      if(this.ReservationDate.nativeElement.value == ''){
        this.validationMessage = 'Reservation Date Must be selected';
      }
      else if (
        new Date(reservationDate).toLocaleDateString() !=
        new Date().toLocaleDateString()
      ) {
        this.validationMessage =
          "Reservation Date must't be greater or less than todays Date";
      } else if (this.numberOfPeople.nativeElement.value == '') {
        this.validationMessage = 'number of people must be selected';
      } else {
        this.validationMessage = 'time must be selected';
      }
      this.showValidationUi = true;
      return true;
    }
    return false;
  }
  addReservedTable() {
  //  if (this.validateReservedTableFormInput() == false) {
      this.reservedTableObji.appointment = this.rTime 
      this.reservedTableObji.nPeople = this.numOfPeople;
      this.reservedTableObji.firstName = this.firstName.nativeElement.value;
      this.reservedTableObji.lastName = this.lastName.nativeElement.value;
      this.reservedTableObji.email = this.email.nativeElement.value;
      this.reservedTableObji.mobile = this.mobile.nativeElement.value;
      this.reservedTableObji.occasion = this.occation.nativeElement.value;
      this.reservedTableObji.seatType = this.seatingType;

      this.date.getUsername().subscribe((res) => {
        res.map((e: any) => {
          const data = e.payload.doc.data();
          this.reservedTableObji.clientName = data.username;

          this.date.addReservation(this.reservedTableObji);

          return null;
        });
      });
    //}
    this.isUserMadeAreservation = true;
    this.router.navigate(['/']);
  }

  getAppointment() {
    this.reservedTableList.forEach((obj: any) => {
      if (this.reservationTime.nativeElement.value == obj.appointment) {
        this.isThatAppointmentReserved = true;
      }
      if(obj.seatType == 'standard'){
         this.standredSeatingNumPeopleExist += Number.parseFloat(obj.nPeople);
         if(this.standeredSeatingMaxCapacity == this.standredSeatingNumPeopleExist){
          this.isStanderedSeatingreachedMaximumCapacity = true;
          this.btnStatus = 'unavailable';
        }
      }
     if(obj.seatType == 'high Top'){
      this.highTopNumPeopleExist += Number.parseFloat(obj.nPeople);
      if(this.highTopMaxCapacity == this.highTopNumPeopleExist){
        this.ishighTopSeatingreachedMaximumCapacity = true;
        this.btnStatus = 'unavailable';
      }
     }
     if(obj.seatType == 'outdoor'){
      this.outdoorNumPeopleExist += Number.parseFloat(obj.nPeople);
      if(this.outdoorMaxCapacity == this.outdoorNumPeopleExist){
        this.isOutdoorSeatingreachedMaximumCapacity = true;
        this.btnStatus = 'unavailable';
      }
     }
      
      
    });

    if (this.validateReservedTableFormInput() == false) {
      if (this.isThatAppointmentReserved == true) {
        this.validationMessage =
          `This Appointment on  Date: ${new Date(this.ReservationDate.nativeElement.value).toLocaleDateString()} :Time ${this.reservationTime.nativeElement.value} Is Not Avaliable`;
        this.showValidationUi = true;
        this.isThatAppointmentReserved = false;
      } else {
        this.validationMessage = '';
        this.showValidationUi = false;
        this.numOfPeople = this.numberOfPeople.nativeElement.value;
        this.rDate = this.ReservationDate.nativeElement.value;
        this.rTime = this.reservationTime.nativeElement.value;
        this.isUserFoundATable = true;
        this.hideSeatingType = true;
        
      }
    }
  }
  returnToFindATable(){
    this.isUserFoundATable = false;
    this.hideSeatingType = true;
   
  }
  hideSeatingTypeDetails(btn:any){
    this.hideSeatingType = false;
    this.seatingType =  btn.getAttribute("attr.data-seating-type");
    console.log(this.seatingType);
  }

  reserveTableForm = this.fb.group({
    fName:[,[Validators.required,Validators.pattern(/^[a-z A-Z]{3,}$/)]],
    lName:[,[Validators.required,Validators.pattern(/^[a-z A-Z]{3,}$/)]],
    mail:[,[Validators.required,Validators.pattern(/^[A-Z a-z]+[0-9]+@[A-Z a-z]+(.com|.eg)$/)]],
    mob:[,[Validators.required,Validators.pattern(/^(01)(0|1|2|5)[0-9]{8}$/)]],
      
  })
  get fName(){
    return this.reserveTableForm.get('fName');
   }
   get lName(){
    return this.reserveTableForm.get('lName');
   }
  get mail(){
    return this.reserveTableForm.get('mail');
   }
   get mob(){
    return this.reserveTableForm.get('mob');
   }
}
