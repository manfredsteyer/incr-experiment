import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component9Component } from './feature62-component9.component';

describe('Feature62Component9Component', () => {
  let component: Feature62Component9Component;
  let fixture: ComponentFixture<Feature62Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
