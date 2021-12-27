import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component23Component } from './feature73-component23.component';

describe('Feature73Component23Component', () => {
  let component: Feature73Component23Component;
  let fixture: ComponentFixture<Feature73Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
