import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component18Component } from './feature63-component18.component';

describe('Feature63Component18Component', () => {
  let component: Feature63Component18Component;
  let fixture: ComponentFixture<Feature63Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
