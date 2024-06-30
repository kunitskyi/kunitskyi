import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlinkComponent } from './plink.component';

describe('PlinkComponent', () => {
  let component: PlinkComponent;
  let fixture: ComponentFixture<PlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
