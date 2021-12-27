import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component1Component } from './feature33-component1.component';

describe('Feature33Component1Component', () => {
  let component: Feature33Component1Component;
  let fixture: ComponentFixture<Feature33Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
