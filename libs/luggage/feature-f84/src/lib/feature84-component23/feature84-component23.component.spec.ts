import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component23Component } from './feature84-component23.component';

describe('Feature84Component23Component', () => {
  let component: Feature84Component23Component;
  let fixture: ComponentFixture<Feature84Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
