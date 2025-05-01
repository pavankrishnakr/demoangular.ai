import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-tiger',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <h1 class="display-4 mb-4">About Tigers</h1>
          <p class="lead">Tigers are the largest members of the cat family and are renowned for their power and strength.</p>
          <p>Tigers are powerful hunters with sharp teeth, strong jaws, and agile bodies. They are the largest of all big cats and can reach up to 3.3 meters in length and weigh up to 300 kilograms.</p>
          <p>There are six subspecies of tigers that still exist today:</p>
          <ul class="list-group mb-4">
            <li class="list-group-item">Bengal Tiger</li>
            <li class="list-group-item">Siberian Tiger</li>
            <li class="list-group-item">Sumatran Tiger</li>
            <li class="list-group-item">Indochinese Tiger</li>
            <li class="list-group-item">Malayan Tiger</li>
            <li class="list-group-item">South China Tiger</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://tse3.mm.bing.net/th/id/OIP.KFVIrFUdRrL2dZ32dYnjMAHaD4?rs=1&pid=ImgDetMain" alt="About Tiger" class="img-fluid rounded shadow">
        </div>
      </div>
      
      <div class="row mt-5">
        <div class="col-12">
          <h2 class="mb-4">Tiger Characteristics</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Physical Features</h5>
                  <p class="card-text">Distinctive orange coat with black stripes, white underside, and powerful build.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Habitat</h5>
                  <p class="card-text">Found in various habitats including tropical forests, grasslands, and mangrove swamps.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Conservation Status</h5>
                  <p class="card-text">Endangered species with only about 3,900 tigers remaining in the wild.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-group-item {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
    }
    .card {
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class AboutTigerComponent {} 