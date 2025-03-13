import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSSComponent } from './task-ss.component';

describe('TaskSSComponent', () => {
  let component: TaskSSComponent;
  let fixture: ComponentFixture<TaskSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
