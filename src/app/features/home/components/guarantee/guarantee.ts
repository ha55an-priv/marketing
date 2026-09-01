import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-guarantee',
  template: `
    <section id="guarantee" class="py-section-gap bg-primary-container text-white">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col gap-4 mb-12">
          <span class="font-label-caps text-label-caps text-secondary-container uppercase">
            {{ language.isSpanish() ? 'Transparencia & Compromiso BYTEK' : 'BYTEK Transparency & Commitment' }}
          </span>
          <h2 class="font-headline-lg text-headline-lg font-bold">
            {{ language.isSpanish() ? 'Sin fricción, sin sorpresas, sin dudas.' : 'No friction, no surprises, no doubts.' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border border-[#565d79] rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
            <span class="material-symbols-outlined text-secondary-container text-3xl mb-5 block">receipt_long</span>
            <h3 class="font-headline-md text-headline-md font-semibold mb-3">
              {{ language.isSpanish() ? 'Presupuestos Transparentes (Desde $150 USD)' : 'Transparent Quotes (From $150 USD)' }}
            </h3>
            <p class="font-body-md text-body-md text-[#dbe1ff]">
              {{ language.isSpanish() ? 'Alcance 100% delimitado sin cobros sorpresa.' : '100% scoped projects with no surprise charges.' }}
            </p>
          </div>
          <div class="border border-[#565d79] rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
            <span class="material-symbols-outlined text-secondary-container text-3xl mb-5 block">task_alt</span>
            <h3 class="font-headline-md text-headline-md font-semibold mb-3">
              {{ language.isSpanish() ? 'Pagos por Hitos Demostrables' : 'Milestone-Based Payments' }}
            </h3>
            <p class="font-body-md text-body-md text-[#dbe1ff]">
              {{ language.isSpanish() ? 'Esquema 50% anticipo / 50% contra entrega funcional validada.' : '50% upfront / 50% on validated functional delivery.' }}
            </p>
          </div>
          <div class="border border-[#565d79] rounded-2xl p-6 bg-white/5 backdrop-blur-sm">
            <span class="material-symbols-outlined text-secondary-container text-3xl mb-5 block">support_agent</span>
            <h3 class="font-headline-md text-headline-md font-semibold mb-3">
              {{ language.isSpanish() ? 'Soporte Post-Lanzamiento Incluido' : 'Post-launch Support Included' }}
            </h3>
            <p class="font-body-md text-body-md text-[#dbe1ff]">
              {{ language.isSpanish() ? 'Póliza de corrección de fallos y soporte directo por 3 meses.' : 'Bug-fix coverage and direct support for 3 months.' }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class GuaranteeComponent {
  readonly language = inject(LanguageService);
}
