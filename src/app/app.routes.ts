import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutTigerComponent } from './pages/about-tiger/about-tiger.component';
import { TigerLivingComponent } from './pages/tiger-living/tiger-living.component';
import { TigerPicturesComponent } from './pages/tiger-pictures/tiger-pictures.component';
import { TigerLifestyleComponent } from './pages/tiger-lifestyle/tiger-lifestyle.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-tiger', component: AboutTigerComponent },
  { path: 'tiger-living', component: TigerLivingComponent },
  { path: 'tiger-pictures', component: TigerPicturesComponent },
  { path: 'tiger-lifestyle', component: TigerLifestyleComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
