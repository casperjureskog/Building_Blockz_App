import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacilitiesService } from '../../providers/facilities-service/facilities-service';
import { BookingsService } from '../../providers/bookings-service/bookings-service';
import { TimeslotsService } from '../../providers/timeslots-service/timeslots-service';
import { LocalNotifications } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { HomePage } from '../home/home';
import { FacilitiesPage } from '../facilities/facilities';
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
  datenow: any;
  timenow: any;

constructor(public navCtrl: NavController, public navParams: NavParams, private facilitiesService: FacilitiesService, private bookingsService: BookingsService, private timeslotsService: TimeslotsService, public alertCtrl: AlertController, public  localNotifications: LocalNotifications ) {
  var id = navParams.get('id');
  var date = navParams.get('date');
  var date2 = moment(date).format('YYYY-MM-DD');
  this.datenow = moment().format('YYYY-MM-DD');
  this.timenow = moment().format('hh:mm:ss');
  this.date = date2;
  this.getFacility(id);
  this.getTimeslots(id, date);

}

getFacility(id){
  this.facilitiesService.getFacility(id)
    .then(data => {
      this.facility = data;
    });
}

getBookings(id, date, start_time, end_time){
  var id = id
  var date = date
  var start_time = start_time
  this.bookingsService.getBookings(id, date, start_time, end_time)
  // console.log(data);
  LocalNotifications.schedule({
  title: "Din bokning är Klockan "+start_time,
  text: 'Rum '+this.facility.name+' kl '+start_time,
  at: new Date(moment(date+' '+start_time).subtract(3, 'hours').format()),
  sound: null
  });

this.navCtrl.push(BookPage, {
date: date, id: id
})
}

deleteBookings(id, ids, date){
  this.bookingsService.deleteBookings(id, ids)
this.navCtrl.push(BookPage, {
date: date, id: id
})
}

getTimeslots(id, date){
  this.timeslotsService.getTimeslots(id, date)
    .then(data => {
      this.timeslots = data;
    });
}

go_to_face(){
  this.navCtrl.push(FacilitiesPage, {
  val: 'test'
  })
}
}
