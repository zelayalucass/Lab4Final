import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCineComponent } from './home-cine.component';

describe('HomeCineComponent', () => {
  let component: HomeCineComponent;
  let fixture: ComponentFixture<HomeCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCineComponent]
    });
    fixture = TestBed.createComponent(HomeCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
