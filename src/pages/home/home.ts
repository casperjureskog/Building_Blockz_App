import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { BookPage } from '../book/book';
import { FacilitiesPage } from '../facilities/facilities';
import { NewsPage } from '../news/news';
import { BookadPage } from '../bookad/bookad';
import { HelprequestPage } from '../helprequest/helprequest';
import { Angular2TokenService } from 'angular2-token';
import { BuildingsService } from '../../providers/buildings-service/buildings-service';
import { LoginPage } from '../login/login';
import * as moment from 'moment';
import * as _ from "lodash";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[BuildingsService]
})
export class HomePage {
  building: any;
  house: string;
  counter: number;
  name: any;
  count: any;
  currentUser = undefined;


  constructor(public navCtrl: NavController,
              private _tokenService: Angular2TokenService,
              public buildingsService: BuildingsService,
              private toastCtrl: ToastController)
              {

      this.getBuilding(); this._tokenService.init({
      apiBase: 'http://localhost:3000/api/v1'
      // apiBase: 'https://building-blockz.herokuapp.com/api/v1'
    });
    this.getBuilding();
    this.currentUser = undefined;
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

  getBuilding(){
    this.buildingsService.getBuilding().then(data => {
      var datas: any = data;
      this.house = datas.name;
      this.counter = datas.count;
    });

  }

  handleSignOutBtnClick() {
    this._tokenService
      .signOut()
      .subscribe(res => console.log(res), err => console.error('error'));
    this.currentUser = undefined;
    this.navCtrl.push(LoginPage);
    this.presentToast('User signed out.')
  }

  presentToast(message_text) {
    let toast = this.toastCtrl.create({
      message: message_text,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
