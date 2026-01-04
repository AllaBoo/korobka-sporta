import { Component, inject, OnInit } from '@angular/core';
import { CTA } from '../cta/cta';
import { Events as EventsService } from '../../app/services/events';
import { Sports as SportsService } from '../../app/services/sports';

@Component({
  selector: 'app-popup',
  imports: [CTA],
  templateUrl: './popup.html',
  styleUrl: './popup.css',
})
export class Popup implements OnInit {
  private eventsService = inject(EventsService);
  private sportsService = inject(SportsService);
  public popupContent = {
    title: '',
    description: '',
    image: '',
  };
  ngOnInit() {
    this.eventsService.selectedEvent$.subscribe((data) => {
      if (data) {
        this.popupContent = {
          title: data.name,
          description: data.description,
          image: data.image,
        };
      }
    });

    this.sportsService.selectedSport$.subscribe((data) => {
      if (data) {
        this.popupContent = {
          title: data.title,
          description: data.description,
          image: data.image,
        };
      }
    });
  }
  deselect(): void {
    this.sportsService.deselectSport();
    this.eventsService.deselectEvent();
  }
}
