import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtCountiesPageRoutingModule } from './connaught-counties-routing.module';

import { ConnaughtCountiesPage } from './connaught-counties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtCountiesPageRoutingModule
  ],
  exports:[ConnaughtCountiesPage],
  declarations: [ConnaughtCountiesPage]
})
export class ConnaughtCountiesPageModule {}
