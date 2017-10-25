import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacilitiesService } from '../../providers/facilities-service/facilities-service';
import { BookPage } from '../book/book';
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


  constructor(public navCtrl: NavController, private facilitiesService:FacilitiesService) {
    this.getFacilities();
}


getFacilities(){
  this.facilitiesService.getFacilities()
    .then(data => {
      console.log(data);
      this.facilities = data;
    });


}




getData(date, id) {
  console.log(date, id);
  this.navCtrl.push(BookPage, {
  date: date, id: id
  })
}

}
