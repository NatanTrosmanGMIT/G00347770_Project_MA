import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UlsterCountiesPage } from './ulster-counties.page';

const routes: Routes = [
  {
    path: '',
    component: UlsterCountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UlsterCountiesPageRoutingModule {}
