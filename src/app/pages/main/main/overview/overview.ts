import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { CTA } from '../../../../../../src/shared/cta/cta';

@Component({
  selector: 'app-overview',
  imports: [UpperCasePipe, CTA],
  templateUrl: './overview.html',
  styleUrls: [
    './overview.css',
    '../../../../../../src/shared/css/title.css',
    '../../../../../../src/shared/css/mixin.css',
  ],
})
export class Overview {
  title = 'Кроссфит в Пушкино';
  description =
    'У нас нет пафоса, панорамных окон, огромных площадей и\u00A0сауны. Вместо этого мы решили сделать уютный зал, в\u00A0котором есть всё для достижения твоих целей.\n Ну, кроме разве что тренировок, тут придётся попотеть в\u00A0реальности ;)';
}
