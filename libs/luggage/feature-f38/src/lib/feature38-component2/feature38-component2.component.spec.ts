import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component2Component } from './feature38-component2.component';

describe('Feature38Component2Component', () => {
  let component: Feature38Component2Component;
  let fixture: ComponentFixture<Feature38Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
