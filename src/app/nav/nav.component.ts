import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark header-navigation">
      <div class="container">
        <a class="navbar-brand" routerLink="/">  <span > <img src="https://www.bing.com/th/id/OIP.c_s7BemYkbdjPu5JmAf_XAHaHa?w=182&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" style="width: 50px;
    height: 50px;
    border-radius: 40px;
    margin-right: 8px;"/>Tiger World </span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                About
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" routerLink="/about-tiger" routerLinkActive="active">About Tiger</a></li>
                <li><a class="dropdown-item" routerLink="/tiger-living" routerLinkActive="active">Tiger Living</a></li>
                <li><a class="dropdown-item" routerLink="/tiger-pictures" routerLinkActive="active">Tiger Pictures</a></li>
                <li><a class="dropdown-item" routerLink="/tiger-lifestyle" routerLinkActive="active">Tiger Lifestyle</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" routerLinkActive="active">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    


.navbar {
  margin-bottom: 20px;
}
.dropdown-menu {
  background-color: #343a40;
}
.dropdown-item {
  color: #fff;
}
.dropdown-item:hover {
  background-color: #495057;
  color: #fff;
}
.header-navigation {
  background-color:rgb(19, 171, 29) !important;}
  `]
  
})
export class NavComponent {} 