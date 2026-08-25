import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-proof',
  imports: [],
  templateUrl: './proof.html',
  styles: ``,
})
export class Proof {
  readonly language = inject(LanguageService);
}
