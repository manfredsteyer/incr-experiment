import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component14Component } from './feature98-component14.component';

describe('Feature98Component14Component', () => {
  let component: Feature98Component14Component;
  let fixture: ComponentFixture<Feature98Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
