import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component23Component } from './feature41-component23.component';

describe('Feature41Component23Component', () => {
  let component: Feature41Component23Component;
  let fixture: ComponentFixture<Feature41Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
