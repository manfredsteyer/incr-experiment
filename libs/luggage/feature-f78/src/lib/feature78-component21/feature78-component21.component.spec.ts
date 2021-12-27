import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component21Component } from './feature78-component21.component';

describe('Feature78Component21Component', () => {
  let component: Feature78Component21Component;
  let fixture: ComponentFixture<Feature78Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
