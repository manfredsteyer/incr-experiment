import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component1Component } from './feature38-component1.component';

describe('Feature38Component1Component', () => {
  let component: Feature38Component1Component;
  let fixture: ComponentFixture<Feature38Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
