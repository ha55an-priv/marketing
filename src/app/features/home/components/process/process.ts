import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process" class="py-section-gap bg-surface">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col gap-4 mb-16">
          <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase">
             {{ language.isSpanish() ? 'Metodología ágil' : 'Agile methodology' }}
          </span>
          <h2 class="font-headline-lg text-headline-lg font-bold text-primary ">
            {{ language.isSpanish() ? 'Flujo de ingeniería centrado en las personas' : 'Human-centered engineering workflow' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div *ngFor="let step of steps()" class="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant relative">
            <span class="font-label-caps text-xs text-outline block mb-4">{{ step.number }}</span>
            <h3 class="font-headline-md text-headline-md font-semibold text-primary  mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  readonly language = inject(LanguageService);
  readonly steps = computed(() => this.language.isSpanish() ? [
    { number: 'FASE // 01', title: 'Descubrimiento', description: 'Modelado del dominio, planos arquitectónicos y delimitación del alcance.' },
    { number: 'FASE // 02', title: 'Arquitectura', description: 'Diseño del esquema de base de datos, contratos de API y selección de infraestructura.' },
    { number: 'FASE // 03', title: 'Desarrollo por iteraciones', description: 'Ciclos de desarrollo iterativos con integración continua y pruebas unitarias.' },
    { number: 'FASE // 04', title: 'Calidad y despliegue', description: 'Pruebas de carga rigurosas, auditorías de seguridad y despliegue sin interrupciones.' }
  ] : [
    { number: 'PHASE // 01', title: 'Discovery', description: 'Domain modeling, architectural blueprints, and scope boundary mapping.' },
    { number: 'PHASE // 02', title: 'Architecture', description: 'Database schema design, API contracts, and infrastructure selection.' },
    { number: 'PHASE // 03', title: 'Sprint coding', description: 'Iterative development cycles with continuous integration and unit testing.' },
    { number: 'PHASE // 04', title: 'QA and deployment', description: 'Rigorous load testing, security audits, and zero-downtime deployment.' }
  ]);
}