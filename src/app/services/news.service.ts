import { Component, Injectable, signal } from '@angular/core';

export interface Post {
  id: string; // UUID
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // Przykładowe dane w pamięci (w finale zastąpione HttpClient.get / post do Twojego API)
  private readonly postsSignal = signal<Post[]>([
    {
      id: 'a8b3f2c0-1111-4f93-891a-0123456789ab',
      title: 'Zbiórka rekrutacyjna i wyjazd morski',
      excerpt: 'Za nami wyjątkowy biwak rekrutacyjny w klimatach żeglarskich...',
      content: 'Pelny opis wydarzenia, szczegóły organizacji i podsumowanie działań patrolu Orlik...',
      imageUrl: 'assets/post1.jpg',
      createdAt: '2026-10-01',
      author: 'Dh. Szymon'
    },
    {
      id: 'b9c4f3d1-2222-4e94-902b-123456789abc',
      title: 'Patronat mjr. Mariana Bernaciaka',
      excerpt: 'Oficjalne nadanie imienia patrona dla naszego patrolu wędrowników.',
      content: 'Więcej szczegółów dotyczących historii i tradycji 7 NDW Orlik...',
      createdAt: '2026-09-15',
      author: 'Zarząd'
    }
  ]);

  readonly posts = this.postsSignal.asReadonly();

  // Pobierz 3 najnowsze (na stronę główną)
  getLatestPosts(limit = 3) {
    return this.postsSignal().slice(0, limit);
  }

  // Pobierz konkretny post po UUID
  getPostById(id: string) {
    return this.postsSignal().find(p => p.id === id);
  }

  // Dodawanie wpisu (wywoływane przez /online-panel oraz API dla Fluttera)
  addPost(newPost: Omit<Post, 'id' | 'createdAt'>) {
    const created: Post = {
      ...newPost,
      id: crypto.randomUUID(), // Generowanie UUID v4
      createdAt: new Date().toISOString().split('T')[0]
    };
    this.postsSignal.update(posts => [created, ...posts]);
    return created;
  }
}