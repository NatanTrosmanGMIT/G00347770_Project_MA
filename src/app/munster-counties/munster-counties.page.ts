import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-munster-counties',
  templateUrl: './munster-counties.page.html',
  styleUrls: ['./munster-counties.page.scss'],
})
export class MunsterCountiesPage implements OnInit {
  counties: string[] = ["Clare", "Cork", "Kerry",
  "Limerick", "Tipperary", "Waterford"];
  constructor() { }

  ngOnInit() {
  }

}
