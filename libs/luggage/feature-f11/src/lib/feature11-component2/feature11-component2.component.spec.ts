import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component2Component } from './feature11-component2.component';

describe('Feature11Component2Component', () => {
  let component: Feature11Component2Component;
  let fixture: ComponentFixture<Feature11Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
