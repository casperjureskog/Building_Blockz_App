import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { BookPage } from '../book/book';
import { FacilitiesPage } from '../facilities/facilities';
import { NewsPage } from '../news/news';
import { BookadPage } from '../bookad/bookad';
import { HelprequestPage } from '../helprequest/helprequest';
import { Angular2TokenService } from 'angular2-token';
import { LocalNotifications } from 'ionic-native';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {


  constructor(public navCtrl: NavController, private _tokenService: Angular2TokenService, public alertCtrl: AlertController, public  localNotifications: LocalNotifications) {
    this._tokenService.init({
      // apiBase: 'http://localhost:3000/api/v1'
      apiBase: 'https://building-blockz.herokuapp.com/api/v1'
    });
    console.log(this._tokenService);
    LocalNotifications.on("click", (notification, state) => {
         let alert = Alert.create({
             title: "Notification Clicked",
             subTitle: "You just clicked the scheduled notification",
             buttons: ["OK"]
         });
         this.navController.present(alert);
     });
  }

  contact() {
    this.navCtrl.push(ContactPage, {
    val: 'test'
    })
  }
  book() {
    this.navCtrl.push(BookPage, {
    val: 'test'
    })
  }
  news() {
    this.navCtrl.push(NewsPage, {
    val: 'test'
    })
  }
  facilities() {
    this.navCtrl.push(FacilitiesPage, {
    val: 'test'
    })
  }
  bookad() {
    this.navCtrl.push(BookadPage, {
    val: 'test'
    })
  }
  helprequest() {
    this.navCtrl.push(HelprequestPage, {
    val: 'test'
    })
  }








  public schedule() {
      LocalNotifications.schedule({
          title: "Test Title",
          text: "Delayed Notification",
          at: new Date(new Date().getTime() + 5 * 1000),
          sound: null
      });
  }
}
