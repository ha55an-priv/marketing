import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'bytek-language';
  readonly language = signal<Language>(this.getInitialLanguage());
  readonly isSpanish = computed(() => this.language() === 'es');

  constructor() {
    this.document.documentElement.lang = this.language();
  }

  toggle(): void {
    const nextLanguage: Language = this.isSpanish() ? 'en' : 'es';
    this.language.set(nextLanguage);
    this.document.documentElement.lang = nextLanguage;
    localStorage.setItem(this.storageKey, nextLanguage);
  }

  private getInitialLanguage(): Language {
    const storedLanguage = localStorage.getItem(this.storageKey);
    return storedLanguage === 'en' ? 'en' : 'es';
  }
}
