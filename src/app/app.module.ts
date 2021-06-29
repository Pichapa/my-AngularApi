import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';
import { Categories1Component } from './component/categories1/categories1.component';
import { ProductComponent } from './component/product/product.component';
import { Product1Component } from './component/product1/product1.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NavComponent,
    Categories1Component,
    ProductComponent,
    Product1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories1', component: Categories1Component },
      { path: 'product', component: ProductComponent },
      { path: 'product1', component: Product1Component },
      { path: '', redirectTo: '/categories', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
