import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Label1Service {

  path: string = '';

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  isEnabled() {
    return this.path != null && this.path.length > 0;
  }

  getLabel() {
    const endpoint = environment.demoApi.baseUrl + "/" + this.path;
    var headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    if (this.authService.isLoggedIn()) {
      headers = headers.append("Authorization", this.authService.idToken);
    }
    window.console.log(headers);
    return this.http.get(endpoint, {"headers": headers});
  }
}
