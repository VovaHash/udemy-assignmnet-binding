import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() eventTimerStarted = new EventEmitter<number>();
 

  constructor() { }

  ngOnInit(): void {
  }


  onClickEmitter(){
   
    let i = 0;
    let intervalId = setInterval(()=>{
      this.eventTimerStarted.emit(i);
      i++;
    },3000);

    
  }

  onCancelEmitter(){

  }

}
