import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-gif',
  templateUrl: './card-gif.component.html',
  styleUrls: ['./card-gif.component.scss']
})
export class CardGifComponent implements OnInit {
  @Input("gif")
  public gif!: Gif;

  constructor(private _gifService: GifsService) { }

  ngOnInit(): void {
    if (!this.gif) throw new Error("Gif property is required");
  }
}
