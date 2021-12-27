import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component8Component } from './feature96-component8.component';

describe('Feature96Component8Component', () => {
  let component: Feature96Component8Component;
  let fixture: ComponentFixture<Feature96Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
