import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component10Component } from './feature67-component10.component';

describe('Feature67Component10Component', () => {
  let component: Feature67Component10Component;
  let fixture: ComponentFixture<Feature67Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
