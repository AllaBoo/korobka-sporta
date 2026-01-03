import { Component, Input, inject } from '@angular/core';
import { IEvent } from '../interface';
import { Events as EventsService } from '../../app/services/events';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() event?: IEvent;
  eventsService = inject(EventsService);
}
