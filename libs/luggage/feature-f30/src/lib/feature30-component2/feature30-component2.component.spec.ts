import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component2Component } from './feature30-component2.component';

describe('Feature30Component2Component', () => {
  let component: Feature30Component2Component;
  let fixture: ComponentFixture<Feature30Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
