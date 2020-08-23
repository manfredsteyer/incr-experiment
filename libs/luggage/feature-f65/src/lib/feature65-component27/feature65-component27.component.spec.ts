import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component27Component } from './feature65-component27.component';

describe('Feature65Component27Component', () => {
  let component: Feature65Component27Component;
  let fixture: ComponentFixture<Feature65Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature65Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
