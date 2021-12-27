import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component8Component } from './feature33-component8.component';

describe('Feature33Component8Component', () => {
  let component: Feature33Component8Component;
  let fixture: ComponentFixture<Feature33Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
