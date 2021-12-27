import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component23Component } from './feature39-component23.component';

describe('Feature39Component23Component', () => {
  let component: Feature39Component23Component;
  let fixture: ComponentFixture<Feature39Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
