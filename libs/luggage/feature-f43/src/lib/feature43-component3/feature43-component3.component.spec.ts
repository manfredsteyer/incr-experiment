import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component3Component } from './feature43-component3.component';

describe('Feature43Component3Component', () => {
  let component: Feature43Component3Component;
  let fixture: ComponentFixture<Feature43Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
