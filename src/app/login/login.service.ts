import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogged: boolean = false;
  public isRegister: boolean = false;
  public user: any ;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  doRegister(username: string, password: string, email: string){
    console.log(username != "" && password != "" && email != "");
    if (username != "" && password != "" && email != "") {
      this.isRegister = true;
      console.log(this.isRegister)
      window.alert(`Registro Compeltado ${username}`)

    }else{
      throwError("Invalid user or password")
    }
  }
  saveUser=(usuario:any)=>{
    this.user = usuario
  }

  doSignIn(username: string, password: string): Observable<any> {
    let response: Observable<any>;
    var user = localStorage.getItem(username)
    var contra = localStorage.getItem(password)
    console.log(username === user && password === contra);
    if (username === user && password === contra) {
      this.isLogged = true;
      response = of({
        user: user,
        mail: "admin@admin.com",
        secret: "admin-super-secret"
      })
    }else{
      response = throwError("Invalid user or password")
    }
    return response.pipe(delay(1000));

  }
}
