import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  public to_do_list: TodoItem[] = [
    // { name: 'action 1', is_done: true },
    // { name: 'action 2', is_done: true },
    // { name: 'action 3', is_done: false },
  ];

  // public check:CheckBox[]=[

  // ]

  set newTodo(item: TodoItem) {
    this.to_do_list.push(item);
  }
}

export interface TodoItem {
  name: string;
  is_done: boolean;
}
// interface CheckBox{
//   // checkbox:string;
//   box:boolean
// }
