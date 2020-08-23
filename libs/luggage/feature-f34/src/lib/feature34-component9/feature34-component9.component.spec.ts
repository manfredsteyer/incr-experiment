import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component9Component } from './feature34-component9.component';

describe('Feature34Component9Component', () => {
  let component: Feature34Component9Component;
  let fixture: ComponentFixture<Feature34Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
