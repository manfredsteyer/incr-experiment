import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component14Component } from './feature5-component14.component';

describe('Feature5Component14Component', () => {
  let component: Feature5Component14Component;
  let fixture: ComponentFixture<Feature5Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
