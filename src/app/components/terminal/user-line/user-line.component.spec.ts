import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLineComponent } from './user-line.component';

describe('UserLineComponent', () => {
  let component: UserLineComponent;
  let fixture: ComponentFixture<UserLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
