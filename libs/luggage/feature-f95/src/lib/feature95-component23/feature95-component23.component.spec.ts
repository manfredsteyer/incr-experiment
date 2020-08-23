import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component23Component } from './feature95-component23.component';

describe('Feature95Component23Component', () => {
  let component: Feature95Component23Component;
  let fixture: ComponentFixture<Feature95Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
