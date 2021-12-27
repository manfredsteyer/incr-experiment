import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component8Component } from './feature88-component8.component';

describe('Feature88Component8Component', () => {
  let component: Feature88Component8Component;
  let fixture: ComponentFixture<Feature88Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
