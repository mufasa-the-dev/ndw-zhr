import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-[#242424] text-white py-10 px-6 border-t-4 border-red-600">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <!-- Powiększone logo i nazwa patrolu -->
        <div class="flex items-center gap-6">
          <img 
            src="orlik-logo.png" 
            alt="1 NDW Orlik Logo" 
            class="w-70 h-70 md:w-50 md:h-50 object-contain" 
          />
          <span class="text-3xl md:text-4xl font-light tracking-wide whitespace-nowrap">
            1 NDW „Orlik”
          </span>
        </div>

        <!-- Sekcje informacyjne -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full md:w-auto">
          
          <!-- Kontakt -->
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2 pb-1 border-b border-gray-600 w-32">Kontakt</h3>
            <p class="text-sm text-gray-300">ndw.hello&#64;outlook.com</p>
            <p class="text-sm text-gray-300">ndw.szymonkryczka&#64;outlook.com</p>
            <p class="text-sm text-gray-300 mt-1">+48 577 973 092</p>
          </div>

          <!-- Miejsce -->
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2 pb-1 border-b border-gray-600 w-32">Miejsce</h3>
            <p class="text-sm text-gray-300">Dzwonnica Żabianka</p>
            <p class="text-sm text-gray-300">Kościół Wniebowzięcia NMP w Żabiance</p>
            <p class="text-sm text-gray-300">08-500 Ryki</p>
          </div>

          <!-- Godziny -->
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2 pb-1 border-b border-gray-600 w-32">Godziny</h3>
            <p class="text-sm font-semibold text-gray-200">Pon - Pt</p>
            <p class="text-sm text-gray-300 mb-1">15:00 - 19:00</p>
            <p class="text-sm font-semibold text-gray-200">Sob, Nd</p>
            <p class="text-sm text-gray-300">10:00 - 16:00</p>
          </div>

        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}