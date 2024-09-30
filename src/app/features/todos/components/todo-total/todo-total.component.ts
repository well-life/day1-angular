import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { TodoService } from '../../../../cores/services/todo.service';

@Component({
  selector: 'app-todo-total',
  templateUrl: './todo-total.component.html',
  styleUrl: './todo-total.component.css'
})
export class TodoTotalComponent {
  @Input() todos!: ITodo[];
  @Input()
  forTrash: boolean = false;

  constructor(private todoService: TodoService) {}

  get totalTrash() {
    return this.todoService.getTotalTrash();
  }

  get totalTodo() {
    return this.todoService.getTotalTodos();
  }
}
