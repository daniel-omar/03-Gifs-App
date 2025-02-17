import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {

  }

  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    console.log(newTag);
    this._gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }

}
