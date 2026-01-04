import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { Sports as SportsService } from '../../../../services/sports';
import { SportsItem } from './sports-item/sports-item';

@Component({
  selector: 'app-sports',
  imports: [UpperCasePipe, SportsItem],
  templateUrl: './sports.html',
  styleUrl: './sports.css',
})
export class Sports {
  title = 'Наши направления';
  sportsService = inject(SportsService);
  sports = this.sportsService.getSports();

  selectSport(name: string): void {
    this.sportsService.selectSport(name);
  }
}
