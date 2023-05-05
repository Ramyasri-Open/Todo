import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  static id: any;
  getTodo(todoId: string | null): import('../todo').Todo | undefined {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
