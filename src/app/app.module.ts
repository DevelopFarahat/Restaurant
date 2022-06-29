
import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { PastaCategoryComponent } from './pasta-category/pasta-category.component';
import { SaladCategoryComponent } from './salad-category/salad-category.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import {AngularFireModule} from "@angular/fire/compat";
import { environment } from './../environments/environment';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClientThanksComponent } from './client-thanks/client-thanks.component';
import { PizzaCategoryComponent } from './pizza-category/pizza-category.component';




@NgModule({
  declarations: [
    AppComponent,
    PizzaCategoryComponent,
    PastaCategoryComponent,
    SaladCategoryComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ReserveTableComponent,
    NavBarComponent,
    FooterComponent,
    CartComponent,
    FilterPipe,
    FilterByStatusPipe,
    CheckoutComponent,
    ClientThanksComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
