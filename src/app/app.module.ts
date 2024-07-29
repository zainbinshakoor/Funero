import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './layout/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestimonialsComponent } from './testimonials/testimonials.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProductCategoryComponent,
    ProductListComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
