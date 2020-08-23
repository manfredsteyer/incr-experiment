import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component8Component } from './feature78-component8.component';

describe('Feature78Component8Component', () => {
  let component: Feature78Component8Component;
  let fixture: ComponentFixture<Feature78Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature78Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
