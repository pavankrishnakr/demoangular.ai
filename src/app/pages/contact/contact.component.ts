import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5">
      <h1 class="display-4 text-center mb-5">Contact Us</h1>
      
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title mb-4">Get in Touch</h3>
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title mb-4">Contact Information</h3>
              <div class="mb-4">
                <h5>Address</h5>
                <p>123 Tiger Conservation Way<br>Wildlife City, WC 12345</p>
              </div>
              <div class="mb-4">
                <h5>Phone</h5>
                <p>+1 (555) 123-4567</p>
              </div>
              <div class="mb-4">
                <h5>Email</h5>
                <p>info&#64;tigerworld.com</p>
              </div>
              <div>
                <h5>Follow Us</h5>
                <div class="social-links">
                  <a href="#" class="me-2"><i class="fab fa-facebook"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
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
    .social-links a {
      color: #343a40;
      font-size: 1.5rem;
      transition: color 0.3s;
    }
    .social-links a:hover {
      color: #007bff;
    }
  `]
})
export class ContactComponent {} 