import { Component, Input, inject } from '@angular/core';
import { IEvent } from '../../../../../../shared/interface';
import { Events as EventsService } from '../../../../../services/events';

@Component({
  selector: 'app-events-item',
  imports: [],
  templateUrl: './events-item.html',
  styleUrl: './events-item.css',
})
export class EventsItem {
  @Input() event?: IEvent;
  eventsService = inject(EventsService);
}
