import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn;
  idToken;

  constructor() { }

  signin() {
    window.location.href = environment.authApi.baseUrl +
      '/login?response_type=token&client_id=' +
      environment.authApi.clientId +
      '&redirect_uri=' +
      environment.authApi.redirectUri +
      '&scope=openid+email';
  }

  signout() {
    this.loggedIn = false;
    this.idToken = null;
    window.location.href = '/';
  }

  setIdToken(token) {
    this.idToken = token;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  init() {
    const param = window.location.hash;
    window.console.log(param);
    if(param.length > 1) {
      if( param.slice(0, 1) === '#' || param.slice(0, 1) === '?' ) {
        const hashs = param.slice(1).split('&');
        const vars = {
          id_token: String
        };
        for(const hash of hashs) {
          const array = hash.split('=');
          vars[array[0]] = array[1];
        }
        if(vars.id_token != null) {
          this.setIdToken(vars.id_token);
          this.loggedIn = true;
        } else {
          window.console.log('no id_token');
        }
      }
    } else {
      window.console.log('no hash');
    }
  }
}
