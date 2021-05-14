import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connaught-counties',
  templateUrl: './connaught-counties.page.html',
  styleUrls: ['./connaught-counties.page.scss'],
})
export class ConnaughtCountiesPage implements OnInit {
  counties: string[] = ["Galway", "Mayo", "Sligo",
  "Leitrim", "Roscommon"];
  constructor() { }

  ngOnInit() {
  }

}
