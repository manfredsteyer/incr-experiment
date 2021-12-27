import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component14Component } from './feature82-component14.component';

describe('Feature82Component14Component', () => {
  let component: Feature82Component14Component;
  let fixture: ComponentFixture<Feature82Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
