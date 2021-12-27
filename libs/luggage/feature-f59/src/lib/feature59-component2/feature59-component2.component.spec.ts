import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component2Component } from './feature59-component2.component';

describe('Feature59Component2Component', () => {
  let component: Feature59Component2Component;
  let fixture: ComponentFixture<Feature59Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
