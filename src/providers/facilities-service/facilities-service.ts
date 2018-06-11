import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class FacilitiesService {

    constructor(public http: Http, private _tokenService: Angular2TokenService) {
        }

    getFacilities() {
    return new Promise(resolve => {
      this._tokenService.get('/facilities').map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getFacility(id) {
  return new Promise(resolve => {
    this._tokenService.get('/facilities/'+id).map(res => res.json()).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
