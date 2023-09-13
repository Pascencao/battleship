import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { WinComponent } from './win/win.component';
import { LostComponent } from './lost/lost.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'win', component: WinComponent },
  { path: 'lost', component: LostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
