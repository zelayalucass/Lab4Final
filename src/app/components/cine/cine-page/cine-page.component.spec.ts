import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinePageComponent } from './cine-page.component';

describe('CinePageComponent', () => {
  let component: CinePageComponent;
  let fixture: ComponentFixture<CinePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinePageComponent]
    });
    fixture = TestBed.createComponent(CinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
