import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  public listGifs: any = [
    { name: "gif 1" },
    { name: "gif 2" },
  ]
}
