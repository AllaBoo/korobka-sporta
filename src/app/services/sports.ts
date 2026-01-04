import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ISport } from '../../shared/interface';

@Injectable({
  providedIn: 'root',
})
export class Sports {
  private readonly sports: ISport[] = [
    {
      title: 'Кроссфит',
      description:
        'Хочешь стать сильнее, выносливее и энергичнее? Тогда кроссфит точно для тебя! Здесь ты прокачаешь тело и дух, почувствуешь мощный заряд энергии и достигнешь новых высот в фитнесе!',
      image: '/images/pages/sports/CrossFit.jpg',
      level: 'Для всех уровней подготовки',
    },
    {
      title: 'Хайрокс',
      description:
        'Уникальный формат соревнований, сочетающий кардионагрузку, силовые упражнения и элементы кроссфита. Хочешь испытать себя, почувствовать азарт борьбы? Ты по адресу! Подготовка к соревнованиям в индивидуальный или командный зачеты',
      image: '/images/pages/sports/Hyrox.jpg',
      level: '',
    },
    {
      title: 'Детский тренинг',
      description:
        'Безопасные тренировки, веселые игры и развитие силы, ловкости и координации – всё это ждёт ребёнка на занятиях кроссфитом. Удивитесь тому, как быстро ребенок станет сильнее, увереннее и активнее!',
      image: '/images/pages/sports/CrossFit-Children.jpg',
      level: '',
    },
    {
      title: 'Стретчинг / Мобилити',
      description:
        'Забудь о боли в спине и скованности движений навсегда! Гибкость и подвижность суставов улучшит самочувствие и повысит качество жизни. После занятий тело будет двигаться легче и свободнее - каждый день!',
      image: '/images/pages/sports/Stretching.jpg',
      level: '',
    },
    {
      title: 'Йога',
      description:
        'Расслабься, восстановись и обрети гармонию тела и души. Регулярные занятия йогой подарят тебе здоровье, красоту и внутреннее спокойствие. Это именно тот способ привести себя в форму, который нужен каждому современному человеку!',
      image: '/images/pages/sports/Yoga.jpg',
      level: '',
    },
    {
      title: 'TRX',
      description:
        'Ищете эффективный метод тренировок с собственным весом? TRX развивает силу, баланс и координацию всего тела одновременно. Всего одно занятие заменит тебе целый комплекс упражнений, делая фигуру подтянутой и стройной быстрее, чем ты думаешь!',
      image: '/images/pages/sports/TRX.jpg',
      level: '',
    },
    {
      title: 'Персональный тренинг',
      description:
        'Индивидуальные тренировки с профессиональным тренером позволят создать идеальное тело и достичь целей максимально эффективно. Мы разработаем программу специально под твои потребности и обеспечим поддержку на каждом этапе пути!',
      image: '/images/pages/sports/Personal.jpg',
      level: '',
    },
  ];
  selectedSportID: string | null = null;
  private selectedSportSubject = new Subject<ISport | undefined>();
  selectedSport$ = this.selectedSportSubject.asObservable();

  getSports(): ISport[] {
    return this.sports;
  }

  selectSport(name: string): void {
    this.selectedSportID = name;
    const selectedSport = this.sports.find((sport) => sport.title === name);
    this.selectedSportSubject.next(selectedSport);
  }

  deselectSport(): void {
    this.selectedSportID = null;
    this.selectedSportSubject.next(undefined);
  }
}
