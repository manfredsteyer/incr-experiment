import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component14Component } from './feature24-component14.component';

describe('Feature24Component14Component', () => {
  let component: Feature24Component14Component;
  let fixture: ComponentFixture<Feature24Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
