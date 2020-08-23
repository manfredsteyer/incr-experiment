import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component2Component } from './feature41-component2.component';

describe('Feature41Component2Component', () => {
  let component: Feature41Component2Component;
  let fixture: ComponentFixture<Feature41Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
