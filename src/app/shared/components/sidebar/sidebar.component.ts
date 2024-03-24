import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  constructor(private _gifsService: GifsService) {

  }

  get tags() {
    return this._gifsService.tagsHistory;
  }

  onSearch(tag: string) {
    this._gifsService.searchTag(tag);
  }
}
