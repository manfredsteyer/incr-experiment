import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component3Component } from './feature57-component3.component';

describe('Feature57Component3Component', () => {
  let component: Feature57Component3Component;
  let fixture: ComponentFixture<Feature57Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
