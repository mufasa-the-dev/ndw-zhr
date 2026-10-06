import { Component, signal } from '@angular/core';

interface NewsCard {
  id: number;
  title: string;
  excerpt: string;
}

@Component({
  selector: 'app-news-carousel',
  template: `
    <section id="aktualnosci" class="bg-paper-texture py-16 px-4 min-h-[800px] flex flex-col items-center">
      <h2 class="text-[#949494] font-['Just_Another_Hand'] text-8xl md:text-9xl tracking-widest text-center mb-12 select-none">
        Aktualności
      </h2>

      <!-- Karty Aktualności -->
      <div class="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:-space-x-12">
        @for (item of newsItems(); track item.id) {
          <article 
            (click)="setActive(item.id)"
            class="relative transition-all duration-300 rounded-[46px] bg-[#CA6767]/95 shadow-[0_0_50px_2px_rgba(255,0,0,0.71)] p-6 text-white flex flex-col justify-between w-full min-h-[576px] cursor-pointer"
            [class]="activeId() === item.id 
              ? 'z-20 scale-105 max-w-[553px] opacity-100' 
              : 'z-10 max-w-[421px] opacity-90 hover:opacity-100'"
          >
            <h3 class="text-3xl font-medium text-center font-['Inter'] mt-2">
              {{ item.title }}
            </h3>

            <div class="my-6 border-3 border-black rounded-[31px] h-[318px] w-full bg-black/10 overflow-hidden flex items-center justify-center">
              <span class="text-black/40 font-mono text-sm">Podgląd wpisu</span>
            </div>

            <p class="text-2xl font-medium font-['Inter'] line-clamp-2 px-2">
              {{ item.excerpt }}
            </p>
          </article>
        }
      </div>
    </section>
  `
})
export class NewsCarouselComponent {
  readonly newsItems = signal<NewsCard[]>([
    { id: 1, title: 'Title', excerpt: 'Lorem Ipsum...' },
    { id: 2, title: 'Title', excerpt: 'Lorem Ipsum...' },
    { id: 3, title: 'Title', excerpt: 'Lorem Ipsum...' },
  ]);

  readonly activeId = signal<number>(2);

  setActive(id: number): void {
    this.activeId.set(id);
  }
}