import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component14Component } from './feature69-component14.component';

describe('Feature69Component14Component', () => {
  let component: Feature69Component14Component;
  let fixture: ComponentFixture<Feature69Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
