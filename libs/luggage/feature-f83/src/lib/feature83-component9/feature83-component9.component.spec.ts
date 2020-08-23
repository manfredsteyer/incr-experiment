import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component9Component } from './feature83-component9.component';

describe('Feature83Component9Component', () => {
  let component: Feature83Component9Component;
  let fixture: ComponentFixture<Feature83Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
