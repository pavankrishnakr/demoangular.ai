import { Component } from '@angular/core';
import { TigerGalleryComponent } from '../tiger-gallery/tiger-gallery.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homecomponent',
  standalone: true,
  imports: [TigerGalleryComponent, FooterComponent],
  template: `
    <div class="home-container">
      <h1 class="welcome-text">Welcome to Tiger World</h1>
      <app-tiger-gallery></app-tiger-gallery>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .welcome-text {
      text-align: center;
      margin: 20px 0;
      font-size: 2.5rem;
      color: #333;
      font-weight: bold;
      position: relative;
      z-index: 1;
      background: white;
      padding: 10px;
    }
  `]
})
export class HomecomponentComponent {
}
