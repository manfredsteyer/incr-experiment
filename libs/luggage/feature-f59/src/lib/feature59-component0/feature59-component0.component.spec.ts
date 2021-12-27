import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component0Component } from './feature59-component0.component';

describe('Feature59Component0Component', () => {
  let component: Feature59Component0Component;
  let fixture: ComponentFixture<Feature59Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
