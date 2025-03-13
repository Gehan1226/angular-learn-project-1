import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-ss',
  imports: [CardComponent, DatePipe],
  templateUrl: './task-ss.component.html',
  styleUrl: './task-ss.component.css',
})
export class TaskSSComponent {
  @Input({ required: true }) task!: Task;
  private readonly taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
