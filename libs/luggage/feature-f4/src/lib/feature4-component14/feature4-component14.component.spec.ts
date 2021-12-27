import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component14Component } from './feature4-component14.component';

describe('Feature4Component14Component', () => {
  let component: Feature4Component14Component;
  let fixture: ComponentFixture<Feature4Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
