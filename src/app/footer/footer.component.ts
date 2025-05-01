import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section company-info">
          <img src="data:image/png;base64,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" alt="Tiger World" class="footer-logo">
          <p class="disclaimer">
            This is not an official website of "Ranthambore National Park". This is a Registered under the Private Travel
            Agency name Jungle Safari India. We organize Hotel, Safari and Tour Package bookings in Ranthambore
            National Park.
          </p>
          <div class="contact-info">
            <p>Jungle Safari India Delhi 110092</p>
            <p>Phone: 9971965629</p>
            <p>Alternate Phone: 7834942435</p>
            <p>Email: contact&#64;ranthamboretigerreserve.in</p>
          </div>
          <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/safari-booking">Safari Booking</a></li>
            <li><a routerLink="/chambal-safari">Chambal Safari Booking</a></li>
            <li><a routerLink="/hotel-booking">Hotel Booking</a></li>
            <li><a routerLink="/package-booking">Package Booking</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a routerLink="/privacy-policy">Privacy Policy</a></li>
            <li><a routerLink="/cancellation">Cancellation Policy</a></li>
            <li><a routerLink="/terms">Terms & Condition</a></li>
            <li><a routerLink="/reach">How To Reach</a></li>
            <li><a routerLink="/about">About Us</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Additional Links</h3>
          <ul>
            <li><a routerLink="/nearby">Near By Attraction</a></li>
            <li><a routerLink="/news">News</a></li>
            <li><a routerLink="/faq">FAQ</a></li>
            <li><a routerLink="/contact">Contact Us</a></li>
            <li><a routerLink="/blogs">Blogs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `,
  styles: [`
   .footer[_ngcontent-ng-c473457021] {
    background-color: #0d700b;
    color: white;
    padding: 40px 0;
    font-family: Arial, sans-serif;
}
i.fab.fa-twitter {
     
    color: #000 !important;
}

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 30px;
      padding: 0 20px;
    }

    .footer-section {
      padding: 0 15px;
    }

    .company-info {
      max-width: 400px;
    }

    .footer-logo {
    max-width: 59px;
    margin-bottom: 20px;
    border-radius: 100px;
}

    .disclaimer {
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .contact-info p {
      margin: 5px 0;
      font-size: 14px;
    }

    h3 {
      color: white;
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 12px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 14px;
      transition: opacity 0.3s;
    }

    a:hover {
      opacity: 0.8;
    }

    .social-links {
      margin-top: 20px;
    }

    .social-icon {
      display: inline-block;
      width: 35px;
      height: 35px;
      background-color: #ddd;
      border-radius: 50%;
      text-align: center;
      line-height: 35px;
      margin-right: 10px;
      transition: background-color 0.3s;
    }

    .social-icon:hover {
      background-color:#faa024;
    }

    @media (max-width: 768px) {
      .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .company-info {
        margin: 0 auto;
      }

      .social-links {
        justify-content: center;
        display: flex;
      }
    }
  `]
})
export class FooterComponent {} 