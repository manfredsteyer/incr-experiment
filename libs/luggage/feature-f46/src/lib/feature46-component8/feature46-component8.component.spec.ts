import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component8Component } from './feature46-component8.component';

describe('Feature46Component8Component', () => {
  let component: Feature46Component8Component;
  let fixture: ComponentFixture<Feature46Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
