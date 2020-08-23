import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component27Component } from './feature97-component27.component';

describe('Feature97Component27Component', () => {
  let component: Feature97Component27Component;
  let fixture: ComponentFixture<Feature97Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
