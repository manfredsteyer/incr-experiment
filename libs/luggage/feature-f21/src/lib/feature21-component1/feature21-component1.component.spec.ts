import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component1Component } from './feature21-component1.component';

describe('Feature21Component1Component', () => {
  let component: Feature21Component1Component;
  let fixture: ComponentFixture<Feature21Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
