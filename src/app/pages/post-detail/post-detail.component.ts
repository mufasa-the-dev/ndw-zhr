import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService, Post } from '../../services/news.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  template: `
    <main class="bg-paper-texture min-h-screen py-16 px-4">
      <div class="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-[32px] shadow-xl">
        @if (post()) {
          <a routerLink="/nowosci" class="text-sm text-red-600 hover:underline mb-6 inline-block">← Powrót do aktualności</a>
          
          <span class="block text-sm text-gray-500 mb-2">{{ post()?.createdAt }} | Author: {{ post()?.author }}</span>
          <h1 class="text-4xl md:text-5xl font-bold font-['Inter'] text-gray-900 mb-6">{{ post()?.title }}</h1>

          @if (post()?.imageUrl) {
            <img [src]="post()?.imageUrl" [alt]="post()?.title" class="w-full h-80 object-cover rounded-2xl mb-8">
          }

          <div class="prose max-w-none text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {{ post()?.content }}
          </div>
        } @else {
          <div class="text-center py-12">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Nie znaleziono posta o podanym identyfikatorze UUID.</h2>
            <a routerLink="/nowosci" class="text-red-600 underline">Wróć do listy aktualności</a>
          </div>
        }
      </div>
    </main>
  `
})
export class PostDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);
  
  readonly post = signal<Post | undefined>(undefined);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.post.set(this.newsService.getPostById(id));
      }
    });
  }
}