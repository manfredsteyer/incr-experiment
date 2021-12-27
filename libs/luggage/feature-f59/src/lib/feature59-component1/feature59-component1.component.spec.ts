import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component1Component } from './feature59-component1.component';

describe('Feature59Component1Component', () => {
  let component: Feature59Component1Component;
  let fixture: ComponentFixture<Feature59Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
