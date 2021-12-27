import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component23Component } from './feature88-component23.component';

describe('Feature88Component23Component', () => {
  let component: Feature88Component23Component;
  let fixture: ComponentFixture<Feature88Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
