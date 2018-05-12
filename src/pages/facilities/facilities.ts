import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FacilitiesService } from '../../providers/facilities-service/facilities-service';
import { BookPage } from '../book/book';
import { DatePicker } from '@ionic-native/date-picker';
import { HomePage } from '../home/home';
import * as moment from 'moment';
// import { DatePicker } from 'ionic-datepicker';
/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
  providers:[FacilitiesService],

})
export class FacilitiesPage {

  facilities: any;
  picker: any;


  constructor(public navCtrl: NavController, private facilitiesService:FacilitiesService, private datePicker: DatePicker) {
    this.getFacilities();
}


getFacilities(){
  this.facilitiesService.getFacilities()
    .then(data => {
      console.log(data);
      this.facilities = data;
    });


}

pickers(id){
this.datePicker.show({
  date: new Date(),
  mode: 'date',
  minDate: moment().locale('de').add(0, 'days').toDate(),
  maxDate: moment().locale('de').add(7, 'days').toDate(),
  allowOldDates: 'false',
}).then(
  date => this.navCtrl.push(BookPage, {
    date: date, id: id}),
  err => console.log('Error occurred while getting date: ', err)
);
}
// getData(date, id) {
//   console.log(date, id);
//   this.navCtrl.push(BookPage, {
//   date: date, id: id
//   })
// }
go_to_home(){
  this.navCtrl.push(HomePage, {
  val: 'test'
  })
}
}
