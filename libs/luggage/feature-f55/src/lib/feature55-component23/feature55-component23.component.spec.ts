import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component23Component } from './feature55-component23.component';

describe('Feature55Component23Component', () => {
  let component: Feature55Component23Component;
  let fixture: ComponentFixture<Feature55Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
