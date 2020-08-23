import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component2Component } from './feature78-component2.component';

describe('Feature78Component2Component', () => {
  let component: Feature78Component2Component;
  let fixture: ComponentFixture<Feature78Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
