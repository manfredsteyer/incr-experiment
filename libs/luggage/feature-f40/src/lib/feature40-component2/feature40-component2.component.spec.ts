import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component2Component } from './feature40-component2.component';

describe('Feature40Component2Component', () => {
  let component: Feature40Component2Component;
  let fixture: ComponentFixture<Feature40Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
