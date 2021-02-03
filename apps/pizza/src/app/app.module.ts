import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { StoreModule } from '@ngrx/store';
import { reducer, PIZZA_FEATURE_NAME } from './pizza.store';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [AppComponent, PizzaComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [PIZZA_FEATURE_NAME]: reducer }),
    ReactiveComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
