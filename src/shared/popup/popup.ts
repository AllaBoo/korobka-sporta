import { Component, inject, OnInit } from '@angular/core';
import { CTA } from '../cta/cta';
import { Events as EventsService } from '../../app/services/events';

@Component({
  selector: 'app-popup',
  imports: [CTA],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class Popup implements OnInit {
  private eventsService = inject(EventsService);
  public popupContent = {
    title: '',
    description: '',
    image: '',
  };
  ngOnInit() {
    this.eventsService.selectedEvent$.subscribe((data) => {
      console.log('popup: ' + data);
      if (data) {
        this.popupContent = {
          title: data.name,
          description: data.description,
          image: data.image,
        };
      }
    });
  }
}
