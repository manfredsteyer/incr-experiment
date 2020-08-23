import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component14Component } from './feature88-component14.component';

describe('Feature88Component14Component', () => {
  let component: Feature88Component14Component;
  let fixture: ComponentFixture<Feature88Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
