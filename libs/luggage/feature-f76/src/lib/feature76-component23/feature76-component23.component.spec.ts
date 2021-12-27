import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component23Component } from './feature76-component23.component';

describe('Feature76Component23Component', () => {
  let component: Feature76Component23Component;
  let fixture: ComponentFixture<Feature76Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
