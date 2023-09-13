import { Component } from '@angular/core';
import * as _ from 'lodash';
import { KickoffService } from '../kickoff.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public steps = 0;
  public counter = 100;
  public boardTable= _.times(10, ()=> _.times(10, ()=>''));
  public headers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  constructor(private kickoffSrv:KickoffService, private route: Router){
  }
  ngOnInit(){
    this.steps = this.kickoffSrv.getSteps();
    this.kickoffSrv.setShips(this.boardTable);
    this.counter = this.kickoffSrv.getallFields();
  }
  checkEnd(){
    if(this.counter > 0 && this.steps > 0){
      return;
    }
    
    let route = '/lost'
    if(this.counter === 0 && this.steps >= 0){
      route = '/win';
    } 
    this.route.navigate([route])
  }
  wasSink($event: any){
    this.steps = this.steps > 0 ? this.steps - 1 : 0;
    console.log($event)
    if($event.id){
      this.counter = this.counter-1;
    }
    this.checkEnd();
  }
}
