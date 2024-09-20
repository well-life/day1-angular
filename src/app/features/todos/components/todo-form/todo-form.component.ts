import { Component } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { TodoService } from '../../../../cores/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {

  constructor(private todoService: TodoService) {}

  todo: ITodo = {
    id: 0,
    isDone: false,
    task: '',
  };

  add() {
    this.todoService.addTodo(this.todo);
  }

  search() {
    this.todoService.searchTodo(this.todo.task);
  }
}
