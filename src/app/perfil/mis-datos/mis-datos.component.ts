import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss']
})
export class MisDatosComponent implements OnInit {
  

  constructor(public LoginService: LoginService) {
    console.log(this.LoginService.saveUser)
  }
  ngOnInit(): void {
    
  }


}
