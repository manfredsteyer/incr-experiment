import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component8Component } from './feature81-component8.component';

describe('Feature81Component8Component', () => {
  let component: Feature81Component8Component;
  let fixture: ComponentFixture<Feature81Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
