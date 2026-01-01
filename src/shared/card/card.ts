import { Component, Input } from '@angular/core';
import { IEvent } from '../interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrls: ['./card.css', '../css/button.css'],
})
export class Card {
  @Input() event?: IEvent;
}
