import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component14Component } from './feature16-component14.component';

describe('Feature16Component14Component', () => {
  let component: Feature16Component14Component;
  let fixture: ComponentFixture<Feature16Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
