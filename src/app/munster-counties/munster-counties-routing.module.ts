import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunsterCountiesPage } from './munster-counties.page';

const routes: Routes = [
  {
    path: '',
    component: MunsterCountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MunsterCountiesPageRoutingModule {}
