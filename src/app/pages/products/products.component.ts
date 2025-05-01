import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <h1 class="display-4 text-center mb-5">Tiger Products</h1>
      
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="https://th.bing.com/th/id/OIP.j0OBOv4YNaySGwqG8OdInAHaD2?w=299&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>            <div class="card-body">
              <h5 class="card-title">Tiger Art Prints</h5>
              <p class="card-text">Beautiful prints of tigers in their natural habitat.</p>
              <p class="card-text"><small class="text-muted">Starting from $29.99</small></p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="https://th.bing.com/th/id/OIP.4sULnjT-peGexlM-K7T_dAAAAA?w=212&h=153&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="card-img-top" alt="Tiger Books">
            <div class="card-body">
              <h5 class="card-title">Educational Books</h5>
              <p class="card-text">Comprehensive guides about tiger species and conservation.</p>
              <p class="card-text"><small class="text-muted">Starting from $19.99</small></p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="https://th.bing.com/th/id/OIP.ZRZm_GTEK4S64QvGzeZ2dwAAAA?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="card-img-top" alt="Tiger Merchandise">
            <div class="card-body">
              <h5 class="card-title">Conservation Merchandise</h5>
              <p class="card-text">Support tiger conservation with our exclusive merchandise.</p>
              <p class="card-text"><small class="text-muted">Starting from $14.99</small></p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">All proceeds support tiger conservation</h3>
              <p class="text-center">By purchasing our products, you're directly contributing to tiger conservation efforts worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-img-top {
      height: 250px;
      object-fit: cover;
    }
  `]
})
export class ProductsComponent {} 