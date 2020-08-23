import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component23Component } from './feature3-component23.component';

describe('Feature3Component23Component', () => {
  let component: Feature3Component23Component;
  let fixture: ComponentFixture<Feature3Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
