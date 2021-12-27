import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component1Component } from './feature90-component1.component';

describe('Feature90Component1Component', () => {
  let component: Feature90Component1Component;
  let fixture: ComponentFixture<Feature90Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
