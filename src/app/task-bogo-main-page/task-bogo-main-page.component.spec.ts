import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBogoMainPageComponent } from './task-bogo-main-page.component';

describe('TaskBogoMainPageComponent', () => {
  let component: TaskBogoMainPageComponent;
  let fixture: ComponentFixture<TaskBogoMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBogoMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBogoMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
