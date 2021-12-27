import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component0Component } from './feature75-component0.component';

describe('Feature75Component0Component', () => {
  let component: Feature75Component0Component;
  let fixture: ComponentFixture<Feature75Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
