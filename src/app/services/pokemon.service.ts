import { Pokemon } from '../models/pokemon.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private listaPokemons: any [];
  private url = "http://localhost:3000/pokemons";

  constructor(private htppCliente: HttpClient) {
    this.listaPokemons= []
   }

  get Pokemons(){
    return this.listaPokemons;
  }

  todosPokemons(): Observable<Pokemon[]>{
    return this.htppCliente.get<Pokemon[]>(this.url);
  }
}
