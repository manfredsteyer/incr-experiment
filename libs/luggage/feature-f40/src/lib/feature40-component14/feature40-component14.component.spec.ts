import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component14Component } from './feature40-component14.component';

describe('Feature40Component14Component', () => {
  let component: Feature40Component14Component;
  let fixture: ComponentFixture<Feature40Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
