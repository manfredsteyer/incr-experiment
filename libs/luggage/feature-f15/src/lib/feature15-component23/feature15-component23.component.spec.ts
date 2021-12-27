import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component23Component } from './feature15-component23.component';

describe('Feature15Component23Component', () => {
  let component: Feature15Component23Component;
  let fixture: ComponentFixture<Feature15Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
