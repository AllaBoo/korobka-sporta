import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

import { CTA } from '../../../../../../src/shared/cta/cta';

@Component({
  selector: 'app-map',
  imports: [UpperCasePipe, CTA],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  title = 'Как нас найти';
}
