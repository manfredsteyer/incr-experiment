import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component23Component } from './feature18-component23.component';

describe('Feature18Component23Component', () => {
  let component: Feature18Component23Component;
  let fixture: ComponentFixture<Feature18Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
