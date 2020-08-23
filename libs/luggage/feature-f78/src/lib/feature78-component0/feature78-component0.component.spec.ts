import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component0Component } from './feature78-component0.component';

describe('Feature78Component0Component', () => {
  let component: Feature78Component0Component;
  let fixture: ComponentFixture<Feature78Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
