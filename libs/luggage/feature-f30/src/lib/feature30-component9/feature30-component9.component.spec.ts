import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component9Component } from './feature30-component9.component';

describe('Feature30Component9Component', () => {
  let component: Feature30Component9Component;
  let fixture: ComponentFixture<Feature30Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
