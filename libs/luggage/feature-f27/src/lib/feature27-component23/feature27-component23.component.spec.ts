import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component23Component } from './feature27-component23.component';

describe('Feature27Component23Component', () => {
  let component: Feature27Component23Component;
  let fixture: ComponentFixture<Feature27Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
