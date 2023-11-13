import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCineComponent } from './edit-cine.component';

describe('EditCineComponent', () => {
  let component: EditCineComponent;
  let fixture: ComponentFixture<EditCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCineComponent]
    });
    fixture = TestBed.createComponent(EditCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
