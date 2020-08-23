import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component9Component } from './feature19-component9.component';

describe('Feature19Component9Component', () => {
  let component: Feature19Component9Component;
  let fixture: ComponentFixture<Feature19Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
