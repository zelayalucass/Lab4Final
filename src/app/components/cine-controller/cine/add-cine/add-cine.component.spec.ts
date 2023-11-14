import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCineComponent } from './add-cine.component';

describe('AddCineComponent', () => {
  let component: AddCineComponent;
  let fixture: ComponentFixture<AddCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCineComponent]
    });
    fixture = TestBed.createComponent(AddCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
