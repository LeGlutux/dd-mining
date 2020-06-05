import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mining-dice',
  templateUrl: './mining-dice.component.html',
  styleUrls: ['./mining-dice.component.scss']
})
export class MiningDiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public handleRandom(prof: number) {

    const dice = Math.floor(Math.random() * 20) + 1;
    console.log(dice);
    const result = dice + prof;
    return result;


  }

}
