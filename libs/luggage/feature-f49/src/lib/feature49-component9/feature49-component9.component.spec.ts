import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component9Component } from './feature49-component9.component';

describe('Feature49Component9Component', () => {
  let component: Feature49Component9Component;
  let fixture: ComponentFixture<Feature49Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
