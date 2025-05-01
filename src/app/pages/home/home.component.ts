import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-fluid p-0">
      <!-- Hero Section -->
      <div class="hero-section position-relative">
        <img src="assets/0.jpg" alt="Tiger Hero" class="img-fluid w-100" style="height: 600px; object-fit: cover;">
        <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 class="display-1 fw-bold">Welcome to Tiger World</h1>
          <p class="lead">Discover the majestic world of tigers</p>
        </div>
      </div>

      <!-- Image Gallery -->
      <div class="container my-5">
        <h2 class="text-center mb-4">Featured Tigers</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card">
              <img src="assets/0.jpg" class="card-img-top" alt="Tiger 1">
              <div class="card-body">
                <h5 class="card-title">Bengal Tiger</h5>
                <p class="card-text">The majestic Bengal tiger in its natural habitat.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="assets/2.jpg" class="card-img-top" alt="Tiger 2">
              <div class="card-body">
                <h5 class="card-title">Siberian Tiger</h5>
                <p class="card-text">The largest of all tiger subspecies.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="assets/3.jpg" class="card-img-top" alt="Tiger 3">
              <div class="card-body">
                <h5 class="card-title">Sumatran Tiger</h5>
                <p class="card-text">The smallest tiger subspecies native to Sumatra.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      position: relative;
    }
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    .card {
      transition: transform 0.3s;
    }
    .card:hover {
      transform: scale(1.03);
    }
    .card-img-top {
      height: 250px;
      object-fit: cover;
    }
  `]
})
export class HomeComponent {} 