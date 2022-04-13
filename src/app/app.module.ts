import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonTypeDirective } from './diretivas/pokemon-type.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonTypeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
