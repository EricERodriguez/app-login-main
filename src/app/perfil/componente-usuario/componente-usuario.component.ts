import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-componente-usuario',
  templateUrl: './componente-usuario.component.html',
  styleUrls: ['./componente-usuario.component.scss']
})
export class ComponenteUsuarioComponent implements OnInit {
  users: any;

  constructor(public LoginService: LoginService) { }

  ngOnInit(): void {
    this.LoginService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
