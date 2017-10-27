import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HrService } from '../../providers/hr-service/hr-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the HelprequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helprequest',
  templateUrl: 'helprequest.html',
  providers:[HrService
              ],
})
export class HelprequestPage {
  public title = [];
  public message = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public hrService: HrService, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelprequestPage');
  }



  getHelprequests(title, message){
    console.log(title, message);

    this.hrService.getHelprequests(title, message)
    this.navCtrl.push(HomePage)
    let toast = this.toastCtrl.create({
    message: `Meddelande skickat`,
    duration: 2000
  });
  toast.present();
}

presentToast(message_text) {
  let toast = this.toastCtrl.create({
    message: message_text,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Medelande skickat');
  });

  toast.present();
}
}
