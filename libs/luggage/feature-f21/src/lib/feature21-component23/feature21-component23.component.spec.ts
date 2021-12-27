import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component23Component } from './feature21-component23.component';

describe('Feature21Component23Component', () => {
  let component: Feature21Component23Component;
  let fixture: ComponentFixture<Feature21Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
