import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component27Component } from './feature47-component27.component';

describe('Feature47Component27Component', () => {
  let component: Feature47Component27Component;
  let fixture: ComponentFixture<Feature47Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
