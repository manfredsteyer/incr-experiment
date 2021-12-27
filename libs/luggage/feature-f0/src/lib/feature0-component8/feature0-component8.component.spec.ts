import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component8Component } from './feature0-component8.component';

describe('Feature0Component8Component', () => {
  let component: Feature0Component8Component;
  let fixture: ComponentFixture<Feature0Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
