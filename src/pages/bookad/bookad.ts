import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TimelistsServiceProvider } from '../../providers/timelists-service/timelists-service';
import { BookingsService } from '../../providers/bookings-service/bookings-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-bookad',
  templateUrl: 'bookad.html',
  providers:[TimelistsServiceProvider,
            BookingsService]

})
export class BookadPage {
  timelists: any;

  constructor(public navCtrl: NavController, private timelistsServiceProvider:TimelistsServiceProvider, private bookingsService: BookingsService) {
    this.getTimelists();
}

getTimelists(){
  this.timelistsServiceProvider.getTimelists()
    .then(data => {
      this.timelists = data;
    });
}

deleteBookings(id, ids){
  this.bookingsService.deleteBookings(id, ids)
  this.navCtrl.push(BookadPage, {
    id: id
  })
}

go_to_home(){
  this.navCtrl.push(HomePage, {
  val: 'test'
  })
}
}
