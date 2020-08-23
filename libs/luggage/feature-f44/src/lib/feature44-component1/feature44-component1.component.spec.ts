import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component1Component } from './feature44-component1.component';

describe('Feature44Component1Component', () => {
  let component: Feature44Component1Component;
  let fixture: ComponentFixture<Feature44Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
