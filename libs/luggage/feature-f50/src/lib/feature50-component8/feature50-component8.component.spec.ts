import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component8Component } from './feature50-component8.component';

describe('Feature50Component8Component', () => {
  let component: Feature50Component8Component;
  let fixture: ComponentFixture<Feature50Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
