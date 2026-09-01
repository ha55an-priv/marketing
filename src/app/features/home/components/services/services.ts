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
            {{ language.isSpanish() ? 'Soluciones que eliminan fricción operativa' : 'Solutions that remove operational friction' }}
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
      title: 'Desarrollo Web y Apps a Medida',
      description: 'Sistemas enfocados en automatización, alta velocidad y eliminación de errores manuales.',
      capabilities: ['Procesos automatizados', 'Dashboards operativos', 'Experiencia rápida y consistente']
    },
    {
      icon: 'dns',
      title: 'Arquitectura e Integraciones',
      description: 'Conexión fluida con pasarelas de pago, APIs y bases de datos seguras.',
      capabilities: ['APIs y webhooks', 'Integración con pagos', 'Datos seguros y confiables']
    },
    {
      icon: 'published_with_changes',
      title: 'Modernización de Sistemas',
      description: 'Migración ágil de hojas de cálculo o software lento a plataformas modernas en la nube.',
      capabilities: ['Migración sin interrupciones', 'Optimización de desempeño', 'Escalabilidad preparada para crecer']
    }
  ] : [
    {
      icon: 'terminal',
      title: 'Custom Web and App Development',
      description: 'Systems focused on automation, speed, and elimination of manual errors.',
      capabilities: ['Automated workflows', 'Operational dashboards', 'Fast and consistent UX']
    },
    {
      icon: 'dns',
      title: 'Architecture and Integrations',
      description: 'Seamless connection with payment gateways, APIs, and secure databases.',
      capabilities: ['APIs and webhooks', 'Payment integrations', 'Secure, reliable data flows']
    },
    {
      icon: 'published_with_changes',
      title: 'System Modernization',
      description: 'Agile migration from spreadsheets or slow software to modern cloud-based platforms.',
      capabilities: ['Zero-downtime migration', 'Performance optimization', 'Scalable growth-ready systems']
    }
  ]);
}