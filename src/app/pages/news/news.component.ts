import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  imports: [RouterLink],
  template: `
    <main class="bg-paper-texture min-h-screen py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-7xl md:text-8xl font-['Just_Another_Hand'] text-[#949494] text-center mb-12">
          Wszystkie Aktualności
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of newsService.posts(); track post.id) {
            <article class="bg-[#CA6767] text-white p-6 rounded-[32px] shadow-lg flex flex-col justify-between">
              <div>
                <span class="text-xs text-white/70">{{ post.createdAt }} • {{ post.author }}</span>
                <h2 class="text-2xl font-bold font-['Inter'] mt-2 mb-4">{{ post.title }}</h2>
                <p class="text-white/90 text-sm line-clamp-3 mb-6">{{ post.excerpt }}</p>
              </div>
              
              <a 
                [routerLink]="['/post-pub']" 
                [queryParams]="{ id: post.id }"
                class="inline-block text-center bg-black/20 hover:bg-black/40 text-white font-medium py-2 px-4 rounded-xl transition-colors"
              >
                Czytaj więcej →
              </a>
            </article>
          }
        </div>
      </div>
    </main>
  `
})
export class NewsComponent {
  readonly newsService = inject(NewsService);
}