import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.APiUrl;
  constructor(private http: HttpClient, ) { }

  private loggedInStatus = false;
  // Here Get using so that it act as property 
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  get isLoggedIn() {
    return this.loggedInStatus;
  }


  getUserDetails(username, password): Observable<any> {
    debugger;
    console.log(this.apiUrl)
    //return 'success';

    let data = { username: username, password: password };
    // post the details to API server return user info if correct
    return this.http.get<any>(this.apiUrl + 'api/login/Auth')
    .pipe(map(objResult => {
      debugger;
      console.log(objResult);
      if (objResult && objResult === 'success') {
          localStorage.setItem('currentUser', 'logged-in');
          return true;
      } else {
          // this.logout();
          return false;
      }
  }));
}
}
