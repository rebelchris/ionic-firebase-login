import { Component } from '@angular/core';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cards: Card[];

  constructor(private cardService: CardService) {}

  searchCard(event) {
    this.cardService.searchCard(event.srcElement.value).then(cards => {
      this.cards = cards;
    })
  }
}
