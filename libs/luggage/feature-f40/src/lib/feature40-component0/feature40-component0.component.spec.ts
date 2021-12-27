import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component0Component } from './feature40-component0.component';

describe('Feature40Component0Component', () => {
  let component: Feature40Component0Component;
  let fixture: ComponentFixture<Feature40Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
