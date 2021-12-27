import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component18Component } from './feature66-component18.component';

describe('Feature66Component18Component', () => {
  let component: Feature66Component18Component;
  let fixture: ComponentFixture<Feature66Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
