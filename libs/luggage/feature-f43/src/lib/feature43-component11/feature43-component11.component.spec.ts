import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component11Component } from './feature43-component11.component';

describe('Feature43Component11Component', () => {
  let component: Feature43Component11Component;
  let fixture: ComponentFixture<Feature43Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
