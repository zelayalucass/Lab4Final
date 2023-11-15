import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSalaComponent } from './home-sala.component';

describe('HomeSalaComponent', () => {
  let component: HomeSalaComponent;
  let fixture: ComponentFixture<HomeSalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSalaComponent]
    });
    fixture = TestBed.createComponent(HomeSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
