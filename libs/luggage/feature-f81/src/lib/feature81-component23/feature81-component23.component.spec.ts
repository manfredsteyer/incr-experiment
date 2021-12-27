import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component23Component } from './feature81-component23.component';

describe('Feature81Component23Component', () => {
  let component: Feature81Component23Component;
  let fixture: ComponentFixture<Feature81Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
