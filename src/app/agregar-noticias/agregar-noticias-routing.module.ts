import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarNoticiasPage } from './agregar-noticias.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarNoticiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarNoticiasPageRoutingModule {}
