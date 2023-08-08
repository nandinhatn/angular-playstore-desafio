import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameCover:string= ""
  @Input()
  gameLabel:string = "Exclusive"
  @Input()
  gameType:string= "Digital PS4"
  @Input()
  gamePrice:string= "R$ 399,90"

  constructor(){}
  ngOnInit(): void {
   
  }

}
