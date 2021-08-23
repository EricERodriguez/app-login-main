import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogged: boolean = false;

  constructor() {}

  doSignIn(username: string, password: string): Observable<any> {
    let response: Observable<any>;
    console.log(username === "admin" && password === "1234");
    if (username === "admin" && password === "1234") {
      this.isLogged = true;
      response = of({
        user: "Admin",
        mail: "admin@admin.com",
        secret: "admin-super-secret"
      })
    }else{
      response = throwError("Invalid user or password")
    }
    return response.pipe(delay(1000));
  }

}
