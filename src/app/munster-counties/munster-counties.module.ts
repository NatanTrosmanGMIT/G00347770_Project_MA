import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunsterCountiesPageRoutingModule } from './munster-counties-routing.module';

import { MunsterCountiesPage } from './munster-counties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MunsterCountiesPageRoutingModule
  ],
  declarations: [MunsterCountiesPage]
})
export class MunsterCountiesPageModule {}
