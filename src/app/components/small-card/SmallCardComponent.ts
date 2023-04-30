import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardSrc: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
  @Input()
  cardSrcAlt: string = 'capa do artigo';
  @Input()
  cardText: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos dolore quod natus mollitia magnam. Modi facere id optio voluptatibus voluptate. Magni ipsam voluptatum velit deleniti animi dolorem, aperiam quaerat?';
  @Input()
  cardAuthor:string='Ilnara Ackermann';
  @Input()
  cardData:string='30/04/2023';
  @Input()
  Id:string='0';

  constructor() {}
  ngOnInit(): void {}
}
