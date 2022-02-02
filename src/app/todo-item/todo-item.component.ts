import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() public text!: string;
  @Input() public checked!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
