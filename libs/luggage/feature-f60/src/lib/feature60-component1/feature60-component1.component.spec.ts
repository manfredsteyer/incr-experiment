import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component1Component } from './feature60-component1.component';

describe('Feature60Component1Component', () => {
  let component: Feature60Component1Component;
  let fixture: ComponentFixture<Feature60Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
