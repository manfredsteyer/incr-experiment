import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component23Component } from './feature36-component23.component';

describe('Feature36Component23Component', () => {
  let component: Feature36Component23Component;
  let fixture: ComponentFixture<Feature36Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
