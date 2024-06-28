import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchTabComponent } from './workbench-tab.component';

describe('WorkbenchTabComponent', () => {
  let component: WorkbenchTabComponent;
  let fixture: ComponentFixture<WorkbenchTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkbenchTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkbenchTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
