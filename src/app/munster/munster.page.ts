import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-munster',
  templateUrl: './munster.page.html',
  styleUrls: ['./munster.page.scss'],
})
export class MunsterPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  openCountiesPage(){
    this.navCtrl.navigateForward('/munster-counties')
  }

}
