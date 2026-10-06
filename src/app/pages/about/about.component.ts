import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <main class="bg-paper-texture min-h-screen py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-7xl md:text-8xl font-['Just_Another_Hand'] text-[#949494] mb-8">O Nas</h1>
        <p class="text-xl text-gray-800 leading-relaxed font-['Inter'] mb-6">
          Jesteśmy 1 Nadwieprzańskim Samodzielnym Patrolem Wędrowników „Orlik”, działającym w ramach Związku Harcerstwa Rzeczypospolitej (ZHR). Naszym patronem jest mjr. Marian Bernaciak „Orlik”.
        </p>
        <p class="text-lg text-gray-700 font-['Inter']">
          Stawiamy na służbę, samorozwój, braterstwo i pracę z młodzieżą na terenach Pradoliny Nadwieprza.
        </p>
      </div>
    </main>
  `
})
export class AboutComponent {}