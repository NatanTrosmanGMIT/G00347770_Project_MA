import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnaughtCountiesPage } from './connaught-counties.page';

const routes: Routes = [
  {
    path: '',
    component: ConnaughtCountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnaughtCountiesPageRoutingModule {}
