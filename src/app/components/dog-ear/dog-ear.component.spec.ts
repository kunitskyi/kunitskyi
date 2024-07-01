import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogEarComponent } from './dog-ear.component';

describe('DogEarComponent', () => {
  let component: DogEarComponent;
  let fixture: ComponentFixture<DogEarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogEarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DogEarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
