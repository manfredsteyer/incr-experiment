import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component14Component } from './feature60-component14.component';

describe('Feature60Component14Component', () => {
  let component: Feature60Component14Component;
  let fixture: ComponentFixture<Feature60Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
