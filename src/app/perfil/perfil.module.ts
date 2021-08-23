import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { ComponenteUsuarioComponent } from './componente-usuario/componente-usuario.component';


@NgModule({
  declarations: [
    PerfilComponent,
    MisDatosComponent,
    ComponenteUsuarioComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
