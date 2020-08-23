import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component9Component } from './feature68-component9.component';

describe('Feature68Component9Component', () => {
  let component: Feature68Component9Component;
  let fixture: ComponentFixture<Feature68Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
