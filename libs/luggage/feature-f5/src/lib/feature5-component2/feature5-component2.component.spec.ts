import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component2Component } from './feature5-component2.component';

describe('Feature5Component2Component', () => {
  let component: Feature5Component2Component;
  let fixture: ComponentFixture<Feature5Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
