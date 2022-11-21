import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// evenArray: number[] = [];
// oddArray: number[] = [];
arrayElements:number[]=[];

  onTimerStarted(val:number){
    // if(val%2===0){
    //   this.evenArray.push(val);
    // } else {
    //   this.oddArray.push(val);
    // }
    this.arrayElements.push(val);
  }


}
