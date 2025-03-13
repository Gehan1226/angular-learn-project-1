import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task-ss/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onClose() {
    this.close.emit();
  }

  onFormSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}
