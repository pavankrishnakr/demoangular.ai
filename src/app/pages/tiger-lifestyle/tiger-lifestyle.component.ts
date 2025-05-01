import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiger-lifestyle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <h1 class="display-4 text-center mb-5">Tiger Lifestyle</h1>
      
      <div class="row mb-5">
        <div class="col-md-6">
          <img src="https://cdn.britannica.com/39/75639-050-07D5CA0D/Bengal-tiger-cubs.jpg" alt="Tiger Lifestyle" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
          <h2>Daily Life of a Tiger</h2>
          <p class="lead">Tigers are solitary creatures with unique behaviors and habits.</p>
          <p>Tigers are primarily nocturnal hunters, spending their days resting and their nights hunting. They are territorial animals, with males having larger territories that overlap with several females.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h2 class="text-center mb-4">Tiger Behaviors</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Hunting</h5>
                  <p class="card-text">Tigers are ambush predators, using their stripes for camouflage and their powerful bodies for quick, decisive attacks.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Communication</h5>
                  <p class="card-text">Tigers communicate through vocalizations, scent marking, and visual signals like tail movements.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Reproduction</h5>
                  <p class="card-text">Female tigers raise their cubs alone, teaching them hunting skills until they're ready to live independently.</p>
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
  `]
})
export class TigerLifestyleComponent {} 