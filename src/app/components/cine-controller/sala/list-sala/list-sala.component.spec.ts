import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalaComponent } from './list-sala.component';

describe('ListSalaComponent', () => {
  let component: ListSalaComponent;
  let fixture: ComponentFixture<ListSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSalaComponent]
    });
    fixture = TestBed.createComponent(ListSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
