import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component1Component } from './feature85-component1.component';

describe('Feature85Component1Component', () => {
  let component: Feature85Component1Component;
  let fixture: ComponentFixture<Feature85Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
