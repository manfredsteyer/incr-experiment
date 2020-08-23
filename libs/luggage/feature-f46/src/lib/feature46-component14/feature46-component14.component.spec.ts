import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component14Component } from './feature46-component14.component';

describe('Feature46Component14Component', () => {
  let component: Feature46Component14Component;
  let fixture: ComponentFixture<Feature46Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
