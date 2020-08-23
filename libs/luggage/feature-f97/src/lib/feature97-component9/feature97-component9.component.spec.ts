import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature97Component9Component } from './feature97-component9.component';

describe('Feature97Component9Component', () => {
  let component: Feature97Component9Component;
  let fixture: ComponentFixture<Feature97Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature97Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature97Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
