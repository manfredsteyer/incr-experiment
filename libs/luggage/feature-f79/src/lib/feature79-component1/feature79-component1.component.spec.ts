import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component1Component } from './feature79-component1.component';

describe('Feature79Component1Component', () => {
  let component: Feature79Component1Component;
  let fixture: ComponentFixture<Feature79Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
