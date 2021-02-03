import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  searchCard(name:string): Promise<Card[]> {
    let params:PokemonTCG.IQuery[] = [{name: 'name', value: name}];
    return PokemonTCG.Card.where(params);
  }

  get(id: string): Promise<Card> {
    return PokemonTCG.Card.find(id);
  }
}
