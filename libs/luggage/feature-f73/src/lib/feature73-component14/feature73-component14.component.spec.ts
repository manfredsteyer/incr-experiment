import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component14Component } from './feature73-component14.component';

describe('Feature73Component14Component', () => {
  let component: Feature73Component14Component;
  let fixture: ComponentFixture<Feature73Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
