import { Component, OnInit } from '@angular/core';
import { Rocks } from './rocks.model';

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
    const result = dice + prof;
    return result;
  }

  public loots(collectNumbers: number, prof: number) {
    const data = [];

    for (let i = 0; i < collectNumbers; i++) {
      data.push(this.repart(prof));
    }
    console.log(data);
  }

  public repart(prof: number) {
    const rocksType: Rocks[] = [{ name: 'charbon', top: 14 }, { name: 'quartz', top: 19 }, { name: 'topaze', top: 60 }];
    const possibleRocks = rocksType.filter((rock) => rock.top >= this.handleRandom(prof));
    return possibleRocks[0];
  }
}
