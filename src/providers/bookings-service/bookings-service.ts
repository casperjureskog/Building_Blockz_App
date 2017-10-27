import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

/*
  Generated class for the BookingsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingsService {

  constructor(public http: Http, private _tokenService: Angular2TokenService) {
    console.log('Hello TimelistsServiceProvider Provider');
      }
  

  getBookings(id, date, start_time, end_time) {
    return new Promise(resolve => {
      this._tokenService.post('facilities/'+id+'/bookings',{facility_id: id, start_time: date+' '+start_time, end_time: date+' '+end_time}).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  deleteBookings(id, ids) {
    return new Promise(resolve => {
      this._tokenService.delete('facilities/'+id+'/bookings/'+ids).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
