import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

/*
  Generated class for the TimeslotsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimeslotsService {

  constructor(public http: Http, private _tokenService: Angular2TokenService) {
    console.log('Hello TimelistsServiceProvider Provider');
      }

  getTimeslots(id, date) {
    return new Promise(resolve => {
      this._tokenService.get('/facilities/'+id+'/timeslots',{params:{date: date}}).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
