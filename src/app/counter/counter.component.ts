import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;
  @Output() showAlertClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(): void {
    this.showAlertClicked.emit(this.counter);
  }

  incrementCounter(): void {
    this.counter++;
  }

}
