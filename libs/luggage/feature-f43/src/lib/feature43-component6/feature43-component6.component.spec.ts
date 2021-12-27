import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component6Component } from './feature43-component6.component';

describe('Feature43Component6Component', () => {
  let component: Feature43Component6Component;
  let fixture: ComponentFixture<Feature43Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
