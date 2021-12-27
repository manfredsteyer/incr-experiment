import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component6Component } from './feature78-component6.component';

describe('Feature78Component6Component', () => {
  let component: Feature78Component6Component;
  let fixture: ComponentFixture<Feature78Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
