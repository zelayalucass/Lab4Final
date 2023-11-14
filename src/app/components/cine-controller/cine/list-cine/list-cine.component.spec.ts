import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCineComponent } from './list-cine.component';

describe('ListCineComponent', () => {
  let component: ListCineComponent;
  let fixture: ComponentFixture<ListCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCineComponent]
    });
    fixture = TestBed.createComponent(ListCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
