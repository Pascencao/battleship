import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { StepsComponent } from './steps/steps.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { LostComponent } from './lost/lost.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StepsComponent,
    BoardComponent,
    CellComponent,
    LostComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
