import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component2Component } from './feature29-component2.component';

describe('Feature29Component2Component', () => {
  let component: Feature29Component2Component;
  let fixture: ComponentFixture<Feature29Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
