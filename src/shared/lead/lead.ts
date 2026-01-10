import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lead',
  imports: [ReactiveFormsModule],
  templateUrl: './lead.html',
  styleUrl: './lead.css',
})
export class Lead {
  leadForm = new FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
  }>({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [(control) => Validators.required(control)],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        (control) => Validators.required(control),
        (control) => Validators.email(control),
      ],
    }),
    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [(control) => Validators.required(control)],
    }),
  });
}
