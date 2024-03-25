import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {
  @Input("url")
  public url!: string;

  @Input("alt")
  public alt: string = '';

  public isLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error("Url is required")
  }

  onLoad(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000)

  }
}
