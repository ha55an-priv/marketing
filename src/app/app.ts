import { Component } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Hero } from './features/home/components/hero/hero';
import { Proof } from './features/home/components/proof/proof';
import { PortfolioComponent } from './features/home/components/portfolio/portfolio';
import { ServicesComponent } from './features/home/components/services/services';
import { ProcessComponent } from './features/home/components/process/process';
import { GuaranteeComponent } from './features/home/components/guarantee/guarantee';
import { ContactComponent } from './features/home/components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    Proof,
    ServicesComponent,
    PortfolioComponent,
    ProcessComponent,
    GuaranteeComponent,
    ContactComponent,
    Footer
  ],
  template: `
    <app-navbar></app-navbar>
    <main class="space-y-20 md:space-y-32 pt-20">
      <app-hero></app-hero>
      <app-proof></app-proof>
      <app-services></app-services>
      <app-portfolio></app-portfolio>
      <app-process></app-process>
      <app-guarantee></app-guarantee>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
