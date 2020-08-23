import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component2Component } from './feature20-component2.component';

describe('Feature20Component2Component', () => {
  let component: Feature20Component2Component;
  let fixture: ComponentFixture<Feature20Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
