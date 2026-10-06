import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  template: `
    <nav class="w-full bg-white/32 backdrop-blur-sm h-[74px] px-4 md:px-8 flex items-center justify-between border-b border-white/20">
      <div class="flex items-center gap-3">
        <img 
          ngSrc="orlik-logo.png" 
          alt="Logo 1 NDW Orlik" 
          width="93" 
          height="51" 
          priority 
        />
        <span class="text-white font-light text-xl tracking-wide font-['Inter']">
          1 NDW „Orlik”
        </span>
      </div>

      <div class="flex items-center gap-3">
        <a 
          href="#o-nas" 
          class="px-6 py-2 text-white font-light text-lg hover:bg-white/10 rounded transition-colors focus-visible:outline-2 focus-visible:outline-white"
        >
          O nas
        </a>
        <a 
          href="#aktualnosci" 
          class="px-6 py-2 bg-[#363636] text-white font-light text-lg rounded hover:bg-[#4a4a4a] transition-colors focus-visible:outline-2 focus-visible:outline-white"
        >
          Nowości
        </a>
      </div>
    </nav>
  `
})
export class HeaderComponent {}