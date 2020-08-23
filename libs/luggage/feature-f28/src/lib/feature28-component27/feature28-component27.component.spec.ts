import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component27Component } from './feature28-component27.component';

describe('Feature28Component27Component', () => {
  let component: Feature28Component27Component;
  let fixture: ComponentFixture<Feature28Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
