import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, HeaderComponent],
  template: `
    <section class="relative w-full min-h-[665px] flex flex-col justify-between border-b-4 border-black shadow-[0_10px_10px_rgba(0,0,0,0.56)] overflow-hidden">
      <!-- Tło ze zdjęciem i gradientem -->
      <div class="absolute inset-0 -z-10">
        <img 
          ngSrc="hero-image.png" 
          alt="Harcerze 1 NDW Orlik przy ognisku" 
          fill 
          priority 
          class="object-cover"
        />
        <div class="absolute inset-0 bg-[radial-gradient(49.96%_113.53%_at_49.96%_50.08%,rgba(0,0,0,0.222)_0%,rgba(0,0,0,0.629)_84.62%)]"></div>
      </div>

      <app-header />

      <div class="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 gap-8 max-w-4xl mx-auto">
        <h1 class="text-[#F56363] font-['Hurricane'] text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow">
          WĘDROWNICY PRADOLINY NADWIEPRZA
        </h1>

        <blockquote class="text-[#B8B8B8] font-['Vujahday_Script'] text-2xl sm:text-3xl max-w-2xl leading-relaxed">
          „Prawdziwy sens życia polega na tym, by nieść pomoc innym i zostawić ten świat choć trochę lepszym, niż go zastaliśmy.”
          <cite class="block text-right text-xl mt-2 not-italic">— Robert Baden-Powell</cite>
        </blockquote>
      </div>
    </section>
  `
})
export class HeroComponent {}