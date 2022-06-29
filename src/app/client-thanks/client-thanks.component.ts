import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-thanks',
  templateUrl: './client-thanks.component.html',
  styleUrls: ['./client-thanks.component.css']
})
export class ClientThanksComponent implements OnInit {
  timeToDeliverOrder:string;
  currentDate:Date;
  constructor() { 
    this.timeToDeliverOrder = '';
  }

  ngOnInit(): void {
    this.addTimes();
  }

 addTimes() {
 this.currentDate = new Date();
  let  dateMillis = this.currentDate .getTime();
  var timePeriod = "02:00:00"; 
  
  var parts = timePeriod.split(/:/);
  var timePeriodMillis = (parseInt(parts[0], 10) * 60 * 60 * 1000) +
                         (parseInt(parts[1], 10) * 60 * 1000) + 
                         (parseInt(parts[2], 10) * 1000);
  
  var newDate = new Date();
  newDate.setTime(dateMillis + timePeriodMillis);
  

  this.timeToDeliverOrder =  newDate.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
}


}
