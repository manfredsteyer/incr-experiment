import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component5Component } from './feature52-component5.component';

describe('Feature52Component5Component', () => {
  let component: Feature52Component5Component;
  let fixture: ComponentFixture<Feature52Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
