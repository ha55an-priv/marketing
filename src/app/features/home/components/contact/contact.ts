import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="py-section-gap bg-surface-container-low border-t border-outline-variant">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span class="font-label-caps text-label-caps text-secondary dark:text-on-secondary-fixed-variant uppercase block mb-4">
                 {{ language.isSpanish() ? 'Inicia tu proyecto de ingeniería' : 'Start your engineering project' }}
              </span>
              <h2 class="font-headline-lg text-headline-lg font-bold text-primary  mb-6">
                {{ language.isSpanish() ? '¿Listo para crear un software adaptado exactamente a tus necesidades?' : 'Ready to build software tailored to your exact needs?' }}
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8">
                {{ language.isSpanish() ? 'Agenda una consulta arquitectónica con nuestros responsables técnicos. Sin discursos comerciales, solo conversaciones de ingeniería con resultado claro.' : 'Schedule an architectural consultation with our technical leads. No sales fluff, just engineering conversations with clear outcomes.' }}
              </p>
            </div>

            <div class="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant space-y-4">
              <div>
                <span class="font-label-caps text-xs text-outline uppercase block mb-2">{{ language.isSpanish() ? 'Contacto directo' : 'Direct contact' }}</span>
                <a href="mailto:bytekbolivia@gmail.com" class="font-headline-md text-headline-md font-bold text-primary hover:underline block">
                  bytekbolivia@gmail.com
                </a>
              </div>
              <div>
                <span class="font-label-caps text-xs text-outline uppercase block mb-2">WhatsApp</span>
                <a href="https://wa.me/?text=Hola%20BYTEK%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20sin%20compromiso." class="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors">
                  Escribenos por WhatsApp para atención inmediata
                </a>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 bg-surface-container-lowest p-8 rounded-lg border border-outline-variant">
            <form class="space-y-6" (submit)="$event.preventDefault()">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">{{ language.isSpanish() ? 'Tu nombre' : 'Your name' }}</label>
                  <input type="text" [placeholder]="language.isSpanish() ? 'Nombre y apellido' : 'First and last name'" class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md"/>
                </div>
                <div>
                  <label class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">{{ language.isSpanish() ? 'Correo laboral' : 'Work email' }}</label>
                  <input type="email" [placeholder]="language.isSpanish() ? 'nombre@empresa.com' : 'name@company.com'" class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md"/>
                </div>
              </div>

              <div>
                <label class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">{{ language.isSpanish() ? 'Rango de presupuesto estimado' : 'Estimated budget range' }}</label>
                <select class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md">
                  <option value="" selected disabled>{{ language.isSpanish() ? 'Selecciona un rango' : 'Select a range' }}</option>
                  <option>&lt; $150 USD (Solución inicial/Landing)</option>
                  <option>$150 - $400 USD (Sistema a medida estándar)</option>
                  <option>$400 - $800 USD (Plataforma empresarial avanzada)</option>
                  <option>&gt; $800 USD (Arquitectura a gran escala)</option>
                </select>
              </div>

              <div>
                <label class="font-label-caps text-xs text-on-surface-variant uppercase block mb-2">{{ language.isSpanish() ? 'Resumen del proyecto' : 'Project brief' }}</label>
                <textarea rows="4" [placeholder]="language.isSpanish() ? 'Describe el problema principal o los requisitos...' : 'Describe the core problem or requirements...'" class="w-full bg-surface border border-outline-variant p-3 rounded text-primary focus:border-primary focus:outline-none font-body-md"></textarea>
              </div>

              <button type="submit" class="w-full bg-primary text-on-primary py-4 rounded font-label-caps uppercase text-label-caps tracking-wider hover:bg-opacity-90 transition-all active:scale-98">
                Solicitar Cotización sin Compromiso
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly language = inject(LanguageService);
}