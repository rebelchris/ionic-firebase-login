import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  searchCard(name:string) {
    let params:PokemonTCG.IQuery[] = [{name: 'name', value: name}];
    return PokemonTCG.Card.where(params);
  }
}
