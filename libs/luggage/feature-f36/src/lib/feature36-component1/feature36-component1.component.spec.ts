import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component1Component } from './feature36-component1.component';

describe('Feature36Component1Component', () => {
  let component: Feature36Component1Component;
  let fixture: ComponentFixture<Feature36Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
