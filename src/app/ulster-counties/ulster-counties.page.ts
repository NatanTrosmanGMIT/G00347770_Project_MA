import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulster-counties',
  templateUrl: './ulster-counties.page.html',
  styleUrls: ['./ulster-counties.page.scss'],
})
export class UlsterCountiesPage implements OnInit {
  counties: string[] = ["Antrim", "Armagh", "Down",
  "Fermanagh", "Londonderry", "Tyrone", "Cavan", "Donegal ",
  "Monaghan"];
  constructor() { }

  ngOnInit() {
  }

}
