import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component3Component } from './feature78-component3.component';

describe('Feature78Component3Component', () => {
  let component: Feature78Component3Component;
  let fixture: ComponentFixture<Feature78Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
