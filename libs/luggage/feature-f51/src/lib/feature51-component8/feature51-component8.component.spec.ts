import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component8Component } from './feature51-component8.component';

describe('Feature51Component8Component', () => {
  let component: Feature51Component8Component;
  let fixture: ComponentFixture<Feature51Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
