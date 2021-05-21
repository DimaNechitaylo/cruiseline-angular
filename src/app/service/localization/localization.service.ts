import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import * as localization from '../../localization.json'

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private localStorage: LocalStorageService) {  }

  getSignUp(): string{
    var locale = this.localStorage.retrieve("locale");
    if(locale==="EN"){
      return localization.signUp.EN;
    }else if(locale==="UA"){
      return localization.signUp.UA;
    }
  }
}
