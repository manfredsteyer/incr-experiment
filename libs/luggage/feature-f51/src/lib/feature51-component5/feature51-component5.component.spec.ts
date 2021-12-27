import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component5Component } from './feature51-component5.component';

describe('Feature51Component5Component', () => {
  let component: Feature51Component5Component;
  let fixture: ComponentFixture<Feature51Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
