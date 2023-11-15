import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaComponent } from './add-sala.component';

describe('AddSalaComponent', () => {
  let component: AddSalaComponent;
  let fixture: ComponentFixture<AddSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalaComponent]
    });
    fixture = TestBed.createComponent(AddSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
