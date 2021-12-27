import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component2Component } from './feature37-component2.component';

describe('Feature37Component2Component', () => {
  let component: Feature37Component2Component;
  let fixture: ComponentFixture<Feature37Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
