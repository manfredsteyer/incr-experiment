import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component14Component } from './feature34-component14.component';

describe('Feature34Component14Component', () => {
  let component: Feature34Component14Component;
  let fixture: ComponentFixture<Feature34Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
