import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component23Component } from './feature96-component23.component';

describe('Feature96Component23Component', () => {
  let component: Feature96Component23Component;
  let fixture: ComponentFixture<Feature96Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
