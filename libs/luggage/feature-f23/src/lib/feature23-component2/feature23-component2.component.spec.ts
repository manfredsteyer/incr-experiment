import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component2Component } from './feature23-component2.component';

describe('Feature23Component2Component', () => {
  let component: Feature23Component2Component;
  let fixture: ComponentFixture<Feature23Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
