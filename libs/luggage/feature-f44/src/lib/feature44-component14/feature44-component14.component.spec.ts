import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component14Component } from './feature44-component14.component';

describe('Feature44Component14Component', () => {
  let component: Feature44Component14Component;
  let fixture: ComponentFixture<Feature44Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
