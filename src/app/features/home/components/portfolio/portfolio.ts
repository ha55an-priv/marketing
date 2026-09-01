import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../core/models/project.model';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="py-section-gap bg-transparent">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col gap-4 mb-16">
          <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase">
             {{ language.isSpanish() ? 'Arquitecturas seleccionadas' : 'Selected architecture' }}
          </span>
          <h2 class="font-headline-lg text-headline-lg font-bold text-primary ">
            {{ language.isSpanish() ? 'Casos reales que mejoran la operación' : 'Real-world cases that improve operations' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let project of projects()" class="bg-white/85 border border-zinc-200 p-8 rounded-2xl hover:border-zinc-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="overflow-hidden rounded-xl mb-6 border border-zinc-200">
                <img
                  [src]="project.imageUrl"
                  [alt]="project.title"
                  class="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <span class="font-label-caps text-xs text-outline uppercase tracking-wider block mb-2">{{ project.category }}</span>
              <h3 class="font-headline-md text-headline-md font-semibold text-primary  mb-3">{{ project.title }}</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-6">{{ project.description }}</p>
              
              <div class="bg-zinc-50 p-4 rounded-xl mb-6 border border-zinc-200/70">
                <span class="font-label-caps text-xs text-outline block mb-1">{{ language.isSpanish() ? 'IMPACTO CLAVE' : 'KEY IMPACT' }}</span>
                <span class="font-headline-md text-sm font-bold text-primary ">{{ project.metrics }}</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 pt-4 border-t border-outline-variant mb-4">
              <a href="#contact" class="font-label-caps text-[10px] bg-primary text-white px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors">Demo Interactiva</a>
              <a href="#contact" class="font-label-caps text-[10px] border border-zinc-300 text-zinc-700 px-3 py-1.5 rounded-full hover:border-zinc-500 transition-colors">Ver Video Demo (30s)</a>
            </div>

            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of project.tags" class="font-label-caps text-xs bg-zinc-100 text-zinc-700 border border-zinc-200/60 px-2.5 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  readonly language = inject(LanguageService);
  readonly projects = computed<Project[]>(() => this.language.isSpanish() ? [
    {
      id: '1',
      title: 'ERP empresarial y logística',
      category: 'Arquitectura de datos',
      description: 'Motor de telemetría en tiempo real y gestión de rutas de suministro para operaciones de alto volumen.',
      tags: ['Angular', 'Go', 'Microservicios'],
      metrics: 'Automatización de inventario en tiempo real',
      imageUrl: '/assets/unnamed1.jpg'
    },
    {
      id: '2',
      title: 'Plataforma financiera a medida',
      category: 'Aplicación web',
      description: 'Sistema de orquestación de transacciones de nivel bancario con respuestas garantizadas en menos de un milisegundo.',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
      metrics: '+40% de eficiencia operativa',
      imageUrl: '/assets/unnamed2.jpg'
    },
    {
      id: '3',
      title: 'Motor de flujos automatizados',
      category: 'Arquitectura en la nube',
      description: 'Plataforma de automatización basada en eventos para flujos complejos de documentos empresariales.',
      tags: ['Python', 'Kafka', 'Docker'],
      metrics: 'Cero caídas',
      imageUrl: '/assets/unnamed3.jpg'
    }
  ] : [
    {
      id: '1', title: 'Enterprise ERP and logistics', category: 'Data architecture',
      description: 'Real-time telemetry and supply chain routing engine handling high-throughput operations.',
      tags: ['Angular', 'Go', 'Microservices'], metrics: 'Real-time inventory automation', imageUrl: '/assets/unnamed1.jpg'
    },
    {
      id: '2', title: 'Bespoke fintech platform', category: 'Web application',
      description: 'Bank-grade transaction orchestration system built with sub-millisecond response guarantees.',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL'], metrics: '+40% operational efficiency', imageUrl: '/assets/unnamed2.jpg'
    },
    {
      id: '3', title: 'Automated workflow engine', category: 'Cloud architecture',
      description: 'Event-driven automation platform for complex enterprise document pipelines.',
      tags: ['Python', 'Kafka', 'Docker'], metrics: 'Zero downtime', imageUrl: '/assets/unnamed3.jpg'
    }
  ]);
}
