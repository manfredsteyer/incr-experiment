import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component13Component } from './feature59-component13.component';

describe('Feature59Component13Component', () => {
  let component: Feature59Component13Component;
  let fixture: ComponentFixture<Feature59Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
