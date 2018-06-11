import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class HrService {


    constructor(public http: Http, private _tokenService: Angular2TokenService) {
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
