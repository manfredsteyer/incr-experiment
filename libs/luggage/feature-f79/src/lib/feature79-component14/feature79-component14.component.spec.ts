import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component14Component } from './feature79-component14.component';

describe('Feature79Component14Component', () => {
  let component: Feature79Component14Component;
  let fixture: ComponentFixture<Feature79Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
