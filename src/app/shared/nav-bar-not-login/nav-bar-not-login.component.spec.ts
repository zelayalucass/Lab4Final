import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNotLoginComponent } from './nav-bar-not-login.component';

describe('NavBarNotLoginComponent', () => {
  let component: NavBarNotLoginComponent;
  let fixture: ComponentFixture<NavBarNotLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarNotLoginComponent]
    });
    fixture = TestBed.createComponent(NavBarNotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
