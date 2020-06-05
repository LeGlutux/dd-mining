import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiningDiceComponent } from './mining-dice/mining-dice.component';


const routes: Routes = [{path: '', component: MiningDiceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
