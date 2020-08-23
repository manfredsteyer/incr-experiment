import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component14Component } from './feature55-component14.component';

describe('Feature55Component14Component', () => {
  let component: Feature55Component14Component;
  let fixture: ComponentFixture<Feature55Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
