import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../../../core/models/project.model';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="py-section-gap bg-white/55 border-y border-zinc-200/70">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col gap-4 mb-16">
          <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase">
             {{ language.isSpanish() ? 'Capacidades principales' : 'Core capabilities' }}
          </span>
          <h2 class="font-headline-lg text-headline-lg font-bold text-primary ">
            {{ language.isSpanish() ? 'Ingeniería de software de precisión' : 'Precision software engineering' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let service of services()" class="bg-white/85 p-8 rounded-2xl border border-zinc-200 hover:border-zinc-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span class="material-symbols-outlined text-primary text-4xl mb-6 block">{{ service.icon }}</span>
              <h3 class="font-headline-md text-headline-md font-semibold text-primary  mb-4">{{ service.title }}</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-6">{{ service.description }}</p>
            </div>

            <ul class="space-y-2 border-t border-outline-variant pt-6">
              <li *ngFor="let cap of service.capabilities" class="font-label-caps text-xs text-on-surface-variant flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-secondary rounded-full inline-block"></span>
                {{ cap }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  readonly language = inject(LanguageService);
  readonly services = computed<ServiceItem[]>(() => this.language.isSpanish() ? [
    {
      icon: 'terminal',
      title: 'Aplicaciones web y móviles a medida',
      description: 'Interfaces a medida y backends robustos diseñados específicamente para tu ámbito operativo.',
      capabilities: ['Aplicaciones de una sola página', 'Aplicaciones web progresivas', 'Backends móviles nativos']
    },
    {
      icon: 'dns',
      title: 'Arquitectura empresarial y API',
      description: 'Estructuras de datos escalables, microservicios limpios y capas de API seguras diseñadas para resistir.',
      capabilities: ['API RESTful y GraphQL', 'Optimización de bases de datos', 'Diseño de sistemas en la nube']
    },
    {
      icon: 'published_with_changes',
      title: 'Modernización de software heredado',
      description: 'Migración de sistemas monolíticos a plataformas web modernas y de alto rendimiento sin pérdida de datos.',
      capabilities: ['Refactorización del código', 'Migración a la nube', 'Auditoría de rendimiento']
    }
  ] : [
    {
      icon: 'terminal',
      title: 'Custom web and mobile apps',
      description: 'Tailor-made frontends and robust backends designed specifically around your operational domain.',
      capabilities: ['Single-page applications', 'Progressive web apps', 'Native mobile backends']
    },
    {
      icon: 'dns',
      title: 'Enterprise architecture and APIs',
      description: 'Scalable data structures, clean microservices, and secure API layers built for resilience.',
      capabilities: ['RESTful and GraphQL APIs', 'Database optimization', 'Cloud systems design']
    },
    {
      icon: 'published_with_changes',
      title: 'Legacy software modernization',
      description: 'Migrating monolithic systems into modern, high-performance web platforms without data loss.',
      capabilities: ['Codebase refactoring', 'Cloud migration', 'Performance auditing']
    }
  ]);
}