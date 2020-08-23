import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component1Component } from './feature74-component1.component';

describe('Feature74Component1Component', () => {
  let component: Feature74Component1Component;
  let fixture: ComponentFixture<Feature74Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
