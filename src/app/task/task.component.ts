import { Component, Input } from '@angular/core';
import { TaskSSComponent } from './task-ss/task-ss.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task-ss/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get getSelectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onClickAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask($event: NewTask) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.id,
      title: $event.title,
      summary: $event.summary,
      dueDate: $event.dueDate,
    });

    this.isAddingTask = false;
  }
}
