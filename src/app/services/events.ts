import { Injectable } from '@angular/core';
import { IEvent } from '../../../src/shared/interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Events {
  private readonly events: IEvent[] = [
    {
      name: '«1000 тонн»',
      description:
        'Не меняем традиций кроссфита - залетаем в челлендж, но в своем формате! Как всегда 🚀',
      image: '/images/pages/main/events/event-1.jpg',
      imagePosition: 'top',
      link: 'link/1',
      CTA: 'Смотреть',
      date: '2025-12-27 11:00',
      id: 0,
    },
    {
      name: 'Новогодняя вечеринка',
      description:
        'Тренировка будет в образе👕👖 Берите атрибутику и готовьтесь быть красивыми',
      image: '/images/pages/main/events/event-2.jpg',
      imagePosition: 'top',
      link: 'link/1',
      CTA: 'Смотреть',
      date: '2025-12-13 17:00',
      id: 1,
    },
    {
      name: '«КОРОБКА СПОРТА» отмечает своей ДР. Нам 2 года',
      description: '🤩 Хей, «КОРОБКА СПОРТА» отмечает свой 2 ДР! 🥳',
      image: '/images/pages/main/events/event-3.jpg',
      imagePosition: 'bottom',
      link: 'link/1',
      CTA: 'Смотреть',
      date: '2025-11-09 17:00',
      id: 2,
    },
  ];
  selectedEventID: number | null = null;
  private selectedEventSubject = new Subject<IEvent | undefined>();
  selectedEvent$ = this.selectedEventSubject.asObservable();

  getEvents(): IEvent[] {
    return this.events;
  }

  selectEvent(id: number): void {
    this.selectedEventID = id;
    this.selectedEventSubject.next(this.events[id]);
  }

  deselectEvent(): void {
    this.selectedEventID = null;
    this.selectedEventSubject.next(undefined);
  }
}
