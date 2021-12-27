import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component1Component } from './feature72-component1.component';

describe('Feature72Component1Component', () => {
  let component: Feature72Component1Component;
  let fixture: ComponentFixture<Feature72Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
