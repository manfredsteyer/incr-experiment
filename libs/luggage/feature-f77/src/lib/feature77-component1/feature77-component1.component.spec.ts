import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component1Component } from './feature77-component1.component';

describe('Feature77Component1Component', () => {
  let component: Feature77Component1Component;
  let fixture: ComponentFixture<Feature77Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
