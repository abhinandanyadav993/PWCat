import { Component, OnInit } from '@angular/core';
class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})

export class ImageCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;
  constructor() { }

  ngOnInit() {
    this.generateSrc();
  }

  public generateSrc(): void {
    this.src = this.image.api + this.image.message +
    '?size=' + this.image.fontsize +
    '&ts=' + Date.now();

    console.log(this.src);
  }

}
