import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component27Component } from './feature30-component27.component';

describe('Feature30Component27Component', () => {
  let component: Feature30Component27Component;
  let fixture: ComponentFixture<Feature30Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
