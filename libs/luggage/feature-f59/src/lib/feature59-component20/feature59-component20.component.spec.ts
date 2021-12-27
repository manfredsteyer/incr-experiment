import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component20Component } from './feature59-component20.component';

describe('Feature59Component20Component', () => {
  let component: Feature59Component20Component;
  let fixture: ComponentFixture<Feature59Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
