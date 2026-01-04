import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISport } from '../../../../../../shared/interface';

@Component({
  selector: 'app-sports-item',
  imports: [],
  templateUrl: './sports-item.html',
  styleUrl: './sports-item.css',
})
export class SportsItem {
  @Input() sport: ISport = {
    title: '',
    description: '',
    image: '',
    level: '',
  };
  @Output() sportSelect = new EventEmitter<string>();

  selectSport(name: string): void {
    this.sportSelect.emit(name);
  }
}
