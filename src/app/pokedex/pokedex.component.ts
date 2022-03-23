import { PokemonService } from '../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  @Input() pokemons: any[] = [];


  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.service.todosPokemons().subscribe((x) => (this.pokemons = x));
  }

}
