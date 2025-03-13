import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task-ss',
  imports: [],
  templateUrl: './task-ss.component.html',
  styleUrl: './task-ss.component.css',
})
export class TaskSSComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
