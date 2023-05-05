import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo, TodoItem } from '../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public flag: boolean = false;
  checkboxes: any;
  item: any;
  // name!: string;
  // change: any;
  is_done: boolean = true;
  color: any;

  constructor(public toDo: Todo, private _router: Router) {}

  ngOnInit(): void {}

  createTodo() {
    this._router.navigate(['/create']);
  }
  onDelete(i: number) {
    this.toDo.to_do_list.splice(i, 1);
  }
  onEdit(id: number) {
    this._router.navigate(['/edit', id]);
  }
  changeColor(todo: TodoItem) {
    todo.is_done = !todo.is_done;
  }
}

// showHideText() {
//   if (this.isDisplayed == true) {
//     this.item.name = 'green';
//   } else {
//     this.item.name = 'blue';
//   }
// this.isDisplayed = !this.isDisplayed;
// }
