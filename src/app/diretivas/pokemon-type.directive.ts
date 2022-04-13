
import { Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[PokemonType]'
})
export class PokemonTypeDirective {

  @Input('PokemonType') tipo = 'fire'

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white'

  iniciarTipos(){
    this.backgroundColor = 'white'

    switch (this.tipo){
      case 'grass':
        this.backgroundColor = 'green';
      break;
      case 'fire':
        this.backgroundColor = 'red';
      break;
      case 'poison':
        this.backgroundColor = 'purple';
      break;
      case 'water':
        this.backgroundColor = 'blue';
      break;
    }
  }

  ngOnInit(){
    this.iniciarTipos()
  }


  constructor( ){}
}
