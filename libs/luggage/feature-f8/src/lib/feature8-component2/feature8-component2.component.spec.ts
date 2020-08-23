import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component2Component } from './feature8-component2.component';

describe('Feature8Component2Component', () => {
  let component: Feature8Component2Component;
  let fixture: ComponentFixture<Feature8Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
