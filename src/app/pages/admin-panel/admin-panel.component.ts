import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-admin-panel',
  imports: [FormsModule],
  template: `
    <main class="bg-paper-texture min-h-screen py-16 px-4">
      <div class="max-w-2xl mx-auto bg-white p-8 rounded-[32px] shadow-xl border border-gray-200">
        <h1 class="text-4xl font-bold font-['Inter'] text-gray-900 mb-6">Online Panel (CMS)</h1>
        
        <form (ngSubmit)="createPost()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tytuł wpisu</label>
            <input 
              type="text" 
              [(ngModel)]="postData.title" 
              name="title" 
              required 
              class="w-full border rounded-xl p-3 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Krótki skrót (Excerpt)</label>
            <input 
              type="text" 
              [(ngModel)]="postData.excerpt" 
              name="excerpt" 
              required 
              class="w-full border rounded-xl p-3 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Autor</label>
            <input 
              type="text" 
              [(ngModel)]="postData.author" 
              name="author" 
              required 
              class="w-full border rounded-xl p-3 text-gray-900"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Pełna treść</label>
            <textarea 
              rows="6" 
              [(ngModel)]="postData.content" 
              name="content" 
              required 
              class="w-full border rounded-xl p-3 text-gray-900 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Opublikuj wpis
          </button>

          @if (success()) {
            <p class="text-green-600 font-semibold text-center mt-2">Wpis opublikowany pomyślnie!</p>
          }
        </form>
      </div>
    </main>
  `
})
export class AdminPanelComponent {
  private newsService = inject(NewsService);

  postData = { title: '', excerpt: '', author: '', content: '' };
  readonly success = signal(false);

  createPost() {
    this.newsService.addPost(this.postData);
    this.success.set(true);
    this.postData = { title: '', excerpt: '', author: '', content: '' };
    setTimeout(() => this.success.set(false), 3000);
  }
}