import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component14Component } from './feature95-component14.component';

describe('Feature95Component14Component', () => {
  let component: Feature95Component14Component;
  let fixture: ComponentFixture<Feature95Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
