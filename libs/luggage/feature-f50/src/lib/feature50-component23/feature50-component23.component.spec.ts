import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component23Component } from './feature50-component23.component';

describe('Feature50Component23Component', () => {
  let component: Feature50Component23Component;
  let fixture: ComponentFixture<Feature50Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
