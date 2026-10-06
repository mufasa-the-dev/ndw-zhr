import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, NewsCarouselComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App {}