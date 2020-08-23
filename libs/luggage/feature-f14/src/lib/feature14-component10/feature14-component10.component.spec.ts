import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component10Component } from './feature14-component10.component';

describe('Feature14Component10Component', () => {
  let component: Feature14Component10Component;
  let fixture: ComponentFixture<Feature14Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
