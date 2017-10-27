import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

/*
  Generated class for the HrServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HrService {


    constructor(public http: Http, private _tokenService: Angular2TokenService) {
      console.log('Hello TimelistsServiceProvider Provider');
        }

        getHelprequests(title, message) {
          return new Promise(resolve => {
            this._tokenService.post('/help_requests',{title: title, message: message}).map(res => res.json()).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
          });
        }
  }
