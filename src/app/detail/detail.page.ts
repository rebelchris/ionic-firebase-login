import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  card: Card;
  constructor(private cardService: CardService, private route: ActivatedRoute) { }

  ionViewWillEnter() {
    let id:string = this.route.snapshot.paramMap.get('id');
    this.cardService.get(id).then((card: Card) => this.card = card);
  }

}
