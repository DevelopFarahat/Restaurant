import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PizzaCategoryComponent } from './pizza-category/pizza-category.component';
import { SaladCategoryComponent } from './salad-category/salad-category.component';
import { PastaCategoryComponent } from './pasta-category/pasta-category.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ReserveTableComponent } from './reserve-table/reserve-table.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthAccountComponent } from './auth-account/auth-account.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ClientThanksComponent } from './client-thanks/client-thanks.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pizza',component:PizzaCategoryComponent},
  {path:'pasta',component:PastaCategoryComponent},
  {path:'salad',component:SaladCategoryComponent},
  // {path:'forget',component:ForgotPasswordComponent},
  // {path:'login',component:DashboardComponent},
  // {path:'signup',component:AuthAccountComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'checkout-verification',component:ClientThanksComponent},
  {path:'home',component:HomeComponent},
   {path:'cart',component:CartComponent},

  {path:'reserveTable',component:ReserveTableComponent},

  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})
export class AppRoutingModule { }
