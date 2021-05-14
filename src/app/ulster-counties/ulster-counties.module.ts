import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UlsterCountiesPageRoutingModule } from './ulster-counties-routing.module';

import { UlsterCountiesPage } from './ulster-counties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UlsterCountiesPageRoutingModule
  ],
  declarations: [UlsterCountiesPage]
})
export class UlsterCountiesPageModule {}
