import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component8Component } from './feature36-component8.component';

describe('Feature36Component8Component', () => {
  let component: Feature36Component8Component;
  let fixture: ComponentFixture<Feature36Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
