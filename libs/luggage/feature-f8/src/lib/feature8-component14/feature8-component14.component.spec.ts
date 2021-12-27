import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component14Component } from './feature8-component14.component';

describe('Feature8Component14Component', () => {
  let component: Feature8Component14Component;
  let fixture: ComponentFixture<Feature8Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
