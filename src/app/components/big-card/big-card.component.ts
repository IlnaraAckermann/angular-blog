import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{

  @Input()
  Id:string='0'
  @Input()
  cardCover:string='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
  @Input()
  cardCoverAlt='Cover Photo'
  @Input()
  cardTitle:string='Lorem Ipsum'
  @Input()
  cardAuthor:string='Ilnara Ackermann'
  @Input()
  cardData:string='30/04/2023'
  @Input()
  cardText:string='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores expedita eligendi dignissimos quos perferendis cum provident, officia ut aperiam consectetur quae praesentium veritatis pariatur laborum iste ipsam ab quas repellendus!'

  constructor(){}
  ngOnInit(): void {
  }
}
