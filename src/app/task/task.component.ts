import { Component, Input } from '@angular/core';
import { TaskSSComponent } from './task-ss/task-ss.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task-ss/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [TaskSSComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private readonly taskService: TaskService) {}

  

  get getSelectedUserTasks() {
    return this.taskService.getUsertasks(this.id);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onClickAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: NewTask) {
    this.taskService.addTask(task, this.id);

    this.isAddingTask = false;
  }
}
