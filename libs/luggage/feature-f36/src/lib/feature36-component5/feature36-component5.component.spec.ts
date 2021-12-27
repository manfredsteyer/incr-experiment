import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component5Component } from './feature36-component5.component';

describe('Feature36Component5Component', () => {
  let component: Feature36Component5Component;
  let fixture: ComponentFixture<Feature36Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
