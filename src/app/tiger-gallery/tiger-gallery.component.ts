import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiger-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tiger-gallery">
      <h2>Tiger Gallery</h2>
      <div class="tiger-grid">
        <div class="tiger-card" *ngFor="let image of tigerImages">
          <img [src]="image.url" [alt]="image.alt" class="tiger-image">
          <p class="tiger-caption">{{image.caption}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tiger-gallery {
      padding: 20px;
      text-align: center;
    }
    .tiger-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .tiger-card {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .tiger-card:hover {
      transform: scale(1.02);
    }
    .tiger-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .tiger-caption {
      padding: 10px;
      margin: 0;
      background: #f8f9fa;
    }
  `]
})
export class TigerGalleryComponent {
  tigerImages = [
    {
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      alt: 'Majestic Tiger',
      caption: 'Royal Bengal Tiger'
    },
    {
      url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      alt: 'Tiger in the Wild',
      caption: 'Wild Tiger'
    },
    {
      url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      alt: 'Tiger Portrait',
      caption: 'Tiger Close-up'
    }
  ];
} 