import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component1Component } from './feature48-component1.component';

describe('Feature48Component1Component', () => {
  let component: Feature48Component1Component;
  let fixture: ComponentFixture<Feature48Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
