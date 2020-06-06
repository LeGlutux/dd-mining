import { Component } from '@angular/core';
import { Rocks } from './rocks.model';

@Component({
  selector: 'app-mining-dice',
  templateUrl: './mining-dice.component.html',
  styleUrls: ['./mining-dice.component.scss']
})
export class MiningDiceComponent {

  public loot: Rocks[] = [];

  public charbon() {
    return this.loot.filter((e) => e.name === 'charbon').length;
  }

  public quartz() {
    return this.loot.filter((e) => e.name === 'quartz').length;
  }

  public topaze() {
    return this.loot.filter((e) => e.name === 'topaze').length;
  }

  public handleRandom(prof: number) {

    const dice = Math.floor(Math.random() * 20) + 1;
    const result = dice + prof;
    return result;
  }

  public loots(collectNumbers: number, prof: number) {
    this.loot = [];
    for (let i = 0; i < collectNumbers; i++) {
      this.loot.push(this.repart(prof));
    }
    return this.loot;
  }

  public repart(prof: number) {
    const rocksType: Rocks[] = [{ name: 'charbon', top: 14 }, { name: 'quartz', top: 19 }, { name: 'topaze', top: 60 }];
    const possibleRocks = rocksType.filter((rock) => rock.top >= this.handleRandom(prof));
    console.log(possibleRocks[0]);
    return possibleRocks[0];

  }
}
