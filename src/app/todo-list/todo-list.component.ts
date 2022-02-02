import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos = [
    { checked: true, text: "Installing Angular"},
    { checked: false, text: "Getting started with Angular"},
    { checked: true, text: "Having a coffee"},
    { checked: false, text: "Pet my cat"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
