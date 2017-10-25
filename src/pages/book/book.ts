import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacilitiesService } from '../../providers/facilities-service/facilities-service';
import { BookingsService } from '../../providers/bookings-service/bookings-service';
import { TimeslotsService } from '../../providers/timeslots-service/timeslots-service';
/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
  providers:[FacilitiesService,
              BookingsService,
              TimeslotsService
              ],
})
export class BookPage {

  facility: any;
  id: any;
  timeslots: any;
  date: any;

constructor(public navCtrl: NavController, public navParams: NavParams, private facilitiesService: FacilitiesService, private bookingsService: BookingsService, private timeslotsService: TimeslotsService ) {
  console.log(navParams.get('date'));
  var id = navParams.get('id');
  var date = navParams.get('date');
  this.date = navParams.get('date');
  this.getFacility(id);
  // this.getBookings(id);
  this.getTimeslots(id, date);
}

getFacility(id){
  console.log(id);
  this.facilitiesService.getFacility(id)
    .then(data => {
      console.log(data);
      this.facility = data;
    });
}

getBookings(id, date, start_time, end_time){
  console.log(id, date, start_time, end_time);
  this.bookingsService.getBookings(id, date, start_time, end_time)
this.navCtrl.push(BookPage, {
date: date, id: id
})
}

deleteBookings(id, ids, date){
  console.log(id, ids, date);
  this.bookingsService.deleteBookings(id, ids)
this.navCtrl.push(BookPage, {
date: date, id: id
})
}

getTimeslots(id, date){
  console.log(id, date);
  this.timeslotsService.getTimeslots(id, date)
    .then(data => {
      console.log(data);
      this.timeslots = data;
    });
}
}
