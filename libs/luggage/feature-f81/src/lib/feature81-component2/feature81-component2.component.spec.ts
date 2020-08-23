import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component2Component } from './feature81-component2.component';

describe('Feature81Component2Component', () => {
  let component: Feature81Component2Component;
  let fixture: ComponentFixture<Feature81Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
