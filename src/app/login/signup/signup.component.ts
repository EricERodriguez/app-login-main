import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private LoginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(10)]
    })
  }


  doSubmit() {

    if (this.registerForm.invalid) {
      alert("Completa todos los campos!!");
      return;
    }else{
      alert(`Gracias por registrarse`)
      this.router.navigateByUrl("/singin")
    }

    const { username, password, email } = this.registerForm.value
    this.LoginService.doRegister(username, password, email)

    localStorage.setItem( email, email)
    localStorage.setItem( password, password)
    localStorage.setItem( username, username)
    this.LoginService.saveUser(localStorage.getItem(username))
  }

}
