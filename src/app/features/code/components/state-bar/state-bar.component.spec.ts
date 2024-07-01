import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateBarComponent } from './state-bar.component';

describe('StateBarComponent', () => {
  let component: StateBarComponent;
  let fixture: ComponentFixture<StateBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StateBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
