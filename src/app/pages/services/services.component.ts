import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <h1 class="display-4 text-center mb-5">Our Services</h1>
      
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fas fa-camera fa-3x mb-3 text-primary"></i>
              <h5 class="card-title">Wildlife Photography Tours</h5>
              <p class="card-text">Join our expert-guided tours to capture stunning images of tigers in their natural habitat.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
              <h5 class="card-title">Conservation Education</h5>
              <p class="card-text">Learn about tiger conservation efforts and how you can contribute to protecting these magnificent creatures.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="fas fa-hands-helping fa-3x mb-3 text-primary"></i>
              <h5 class="card-title">Volunteer Programs</h5>
              <p class="card-text">Participate in our volunteer programs to help with tiger conservation and research.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Additional Services</h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Guided Safari Tours</li>
                <li class="list-group-item">Research Support</li>
                <li class="list-group-item">Conservation Workshops</li>
                <li class="list-group-item">Wildlife Documentaries</li>
                <li class="list-group-item">Educational Programs</li>
              </ul>
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
    .list-group-item {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
    }
  `]
})
export class ServicesComponent {} 