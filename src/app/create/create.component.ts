import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(public router: Router, private toDo: Todo) {}
  saveList(item: string) {
    this.toDo.newTodo = { name: item, is_done: false };
    this.router.navigate(['']);
  }
  ngOnInit(): void {}
}
