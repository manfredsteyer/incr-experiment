import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component2Component } from './feature72-component2.component';

describe('Feature72Component2Component', () => {
  let component: Feature72Component2Component;
  let fixture: ComponentFixture<Feature72Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
