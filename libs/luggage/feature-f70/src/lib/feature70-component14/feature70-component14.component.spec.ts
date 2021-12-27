import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component14Component } from './feature70-component14.component';

describe('Feature70Component14Component', () => {
  let component: Feature70Component14Component;
  let fixture: ComponentFixture<Feature70Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
