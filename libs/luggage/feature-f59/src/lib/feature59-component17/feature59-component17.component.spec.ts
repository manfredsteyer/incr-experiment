import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature59Component17Component } from './feature59-component17.component';

describe('Feature59Component17Component', () => {
  let component: Feature59Component17Component;
  let fixture: ComponentFixture<Feature59Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature59Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature59Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
