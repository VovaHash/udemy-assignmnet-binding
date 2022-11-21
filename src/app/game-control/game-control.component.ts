import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalId;
  i = 0;
  @Output() eventTimerStarted = new EventEmitter<number>();
 

  constructor() { }

  ngOnInit(): void {
  }


  onClickEmitter(){
    this.intervalId = setInterval(()=>{
      this.eventTimerStarted.emit(this.i);
      this.i++;
    },1000);

    
  }

  onCancelEmitter(){
    clearInterval(this.intervalId);
  }

}
