import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component14Component } from './feature72-component14.component';

describe('Feature72Component14Component', () => {
  let component: Feature72Component14Component;
  let fixture: ComponentFixture<Feature72Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
