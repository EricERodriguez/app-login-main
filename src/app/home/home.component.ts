import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="text-center">
      <h1>
        Bienvenido! {{name}}
      </h1>
      <a routerLink="/perfil" class="btn btn-primary">Ver mis datos</a>
      <br>
      <button class="btn btn-primary mt-3" (click)="sayHello()">Hola!</button>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  name = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.name = res.username
    })
  }

  sayHello(){
    this.router.navigate(['/'], { queryParams: { username: "Ayier" }, });
  }

}
