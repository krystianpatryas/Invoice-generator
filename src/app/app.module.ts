import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/add-products', pathMatch: 'full' },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'show-products', component: ShowProductsComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    ShowProductsComponent,
    AddProductsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
