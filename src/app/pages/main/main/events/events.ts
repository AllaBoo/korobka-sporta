import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Events as EventsService } from '../../../../services/events';
import { Card } from '../../../../../../src/shared/card/card';

@Component({
  selector: 'app-events',
  imports: [UpperCasePipe, Card],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  title = 'мероприятия и проекты';
  eventsService = inject(EventsService);
  events = this.eventsService.getEvents();
}
