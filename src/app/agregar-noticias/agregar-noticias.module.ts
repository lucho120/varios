import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarNoticiasPageRoutingModule } from './agregar-noticias-routing.module';

import { AgregarNoticiasPage } from './agregar-noticias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarNoticiasPageRoutingModule
  ],
  declarations: [AgregarNoticiasPage]
})
export class AgregarNoticiasPageModule {}
