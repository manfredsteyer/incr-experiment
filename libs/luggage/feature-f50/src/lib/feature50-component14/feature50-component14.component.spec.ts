import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component14Component } from './feature50-component14.component';

describe('Feature50Component14Component', () => {
  let component: Feature50Component14Component;
  let fixture: ComponentFixture<Feature50Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
