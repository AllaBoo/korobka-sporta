import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Events as EventsService } from '../../../../services/events';
import { EventsItem } from './events-item/events-item';

@Component({
  selector: 'app-events',
  imports: [UpperCasePipe, EventsItem],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  title = 'мероприятия и проекты';
  eventsService = inject(EventsService);
  events = this.eventsService.getEvents();
}
