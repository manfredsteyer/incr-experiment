import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component1Component } from './feature76-component1.component';

describe('Feature76Component1Component', () => {
  let component: Feature76Component1Component;
  let fixture: ComponentFixture<Feature76Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
