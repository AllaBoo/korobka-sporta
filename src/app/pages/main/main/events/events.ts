import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { IEvent } from '../../../../../../src/shared/interface';
import { Card } from '../../../../../../src/shared/card/card';

@Component({
  selector: 'app-events',
  imports: [UpperCasePipe, Card],
  templateUrl: './events.html',
  styleUrls: ['./events.css', '../../../../../../src/shared/css/title.css'],
})
export class Events {
  title = 'мероприятия и проекты';
  events: IEvent[] = [
    {
      name: 'Командные соревнования (ММ, МЖ)',
      description:
        'Приглашаем вас принять участие в наших любительских соревнованиях',
      image: '/images/pages/main/events/event-1.jpg',
      link: 'link/1',
      CTA: 'Смотреть',
      date: '2026-01-01',
    },
    {
      name: 'Пушистая заруба',
      description:
        'Не будем долго томить, рассказываем про наших атлетов пушистых спортсменов, которые на всякий случай остались дома и ждали хозяев с лакомством и подарочками из лотереи х соревнованиях',
      image: '/images/pages/main/events/event-2.jpg',
      link: 'link/1',
      CTA: 'Смотреть',
      date: '2025-11-30',
    },
    {
      name: 'забега в функциональной гонке российского аналога HYROX',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: '/images/pages/main/events/event-3.jpg',
      link: 'link/1',
      CTA: 'Смотреть',
      date: '2025-11-25',
    },
  ];
}
