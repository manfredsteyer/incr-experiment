import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component14Component } from './feature58-component14.component';

describe('Feature58Component14Component', () => {
  let component: Feature58Component14Component;
  let fixture: ComponentFixture<Feature58Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
