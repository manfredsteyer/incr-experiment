import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component1Component } from './feature29-component1.component';

describe('Feature29Component1Component', () => {
  let component: Feature29Component1Component;
  let fixture: ComponentFixture<Feature29Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
