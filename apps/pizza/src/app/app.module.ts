import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { PIZZA_FEATURE_NAME, reducer } from './pizza.store';

@NgModule({
  declarations: [AppComponent, PizzaComponent],
  imports: [
    BrowserModule,
    ReactiveComponentModule,
    StoreModule.forRoot({ [PIZZA_FEATURE_NAME]: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
