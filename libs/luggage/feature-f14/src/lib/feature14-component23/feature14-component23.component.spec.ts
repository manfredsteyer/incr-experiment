import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component23Component } from './feature14-component23.component';

describe('Feature14Component23Component', () => {
  let component: Feature14Component23Component;
  let fixture: ComponentFixture<Feature14Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
