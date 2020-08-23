import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component27Component } from './feature59-component27.component';

describe('Feature59Component27Component', () => {
  let component: Feature59Component27Component;
  let fixture: ComponentFixture<Feature59Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature59Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
