import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component5Component } from './feature9-component5.component';

describe('Feature9Component5Component', () => {
  let component: Feature9Component5Component;
  let fixture: ComponentFixture<Feature9Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
