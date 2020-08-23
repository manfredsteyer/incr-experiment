import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component20Component } from './feature78-component20.component';

describe('Feature78Component20Component', () => {
  let component: Feature78Component20Component;
  let fixture: ComponentFixture<Feature78Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
