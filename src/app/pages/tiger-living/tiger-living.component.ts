import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiger-living',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <h1 class="display-4 text-center mb-5">Tiger Living</h1>
      
      <div class="row mb-5">
        <div class="col-md-6">
          <img src="https://th.bing.com/th/id/OSK.HEROtE7pvoSOApaNnHcG1xp7JQD4OsaX40qA0SxZREPfvXw?w=296&h=176&c=13&rs=2&o=6&oif=webp&dpr=1.5&pid=SANGAM" alt="Tiger Habitat" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
          <h2>Natural Habitat</h2>
          <p class="lead">Tigers are found in diverse habitats across Asia, from the Siberian taiga to the mangrove swamps of the Sundarbans.</p>
          <p>Tigers are highly adaptable and can live in a range of environments, including:</p>
          <ul class="list-group">
            <li class="list-group-item">Tropical rainforests</li>
            <li class="list-group-item">Grasslands and savannas</li>
            <li class="list-group-item">Mangrove swamps</li>
            <li class="list-group-item">Temperate forests</li>
            <li class="list-group-item">Taiga forests</li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h2 class="text-center mb-4">Conservation Areas</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="https://www.bing.com/th/id/OIP.vu4u9A1yjNW1oxFGRo-d0QHaEK?w=305&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" class="card-img-top" alt="Conservation Area 1">
                <div class="card-body">
                  <h5 class="card-title">Sundarbans National Park</h5>
                  <p class="card-text">Home to the Bengal tiger in the world's largest mangrove forest.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="https://www.bing.com/th/id/OIP.AeEeR4al6yPIKIBxndBbTAHaE8?w=312&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" class="card-img-top" alt="Conservation Area 2">
                <div class="card-body">
                  <h5 class="card-title">Ranthambore National Park</h5>
                  <p class="card-text">Famous for its tiger population and historical ruins.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src="https://www.bing.com/th/id/OIP.qP2Wk2GisvPUVyvXQR3RuAHaFj?w=229&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" class="card-img-top" alt="Conservation Area 3">
                <div class="card-body">
                  <h5 class="card-title">Sikhote-Alin Nature Reserve</h5>
                  <p class="card-text">Protects the endangered Siberian tiger population.</p>
                </div>
              </div>
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
      height: 200px;
      object-fit: cover;
    }
    .list-group-item {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
    }
  `]
})
export class TigerLivingComponent {} 