import { Injectable } from '@angular/core';
import {times as _times, set as _set, get as _get} from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class KickoffService {
  steps = 50;
  ships = [
    {size: 4, id: 'a'},
    {size: 3, id: 'b'},
    {size: 3, id: 'c'},
    {size: 2, id: 'd'},
    {size: 2, id: 'e'},
    {size: 2, id: 'f'},
    {size: 1, id: 'g'},
    {size: 1, id: 'h'},
    {size: 1, id: 'i'},
    {size: 1, id: 'j'}
  ]
  boardSize = 10;

  constructor() { 

  }
  getSteps(){
    return this.steps;
  }
  getallFields(){
    let count = 0;
    this.ships.map((ship)=> count += ship.size)
    return count;
  }
  getPosition(){
    return Math.floor(Math.random() * this.boardSize);
  }
  areValidCoords(board:any[][], coords: string[]){
    let itsOk = true
    coords.map((coord: string)=>{
      let isFilledIn = _get(board, coord);
      itsOk = isFilledIn ? false : itsOk;
    })
    return itsOk;
  }
  getCoords(len:number, board: any[][]): string[]{
    let x = this.getPosition();
    let y = this.getPosition();
    let orientation = x % 2;
    if(x + len >= this.boardSize){
      x = this.boardSize - len -1;
    }
    if(y + len >= this.boardSize){
      y = this.boardSize - len - 1;
    }
    let coords:string[] = [];
    _times(len, (mult)=>{
      if(orientation){
        x = x + 1;
      } else {
        y = y + 1
      }
      coords[mult] = `[${x}][${y}]`;
    })
    let validCoords:boolean = this.areValidCoords(board, coords)
    return validCoords ? coords : this.getCoords(len, board) 
  }
  
  setShips(board: any[][]){
    this.ships.map((ship) =>{
      let coords = this.getCoords(ship.size, board);
      console.log(ship, coords)
      coords.map((coord:string,index: number)=>{
        board = _set(board, coord, {id: `${ship.id}${index}`})
      })
    })
    console.log(board)
    return board;
  }
}
