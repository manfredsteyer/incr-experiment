import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component7Component } from './feature15-component7.component';

describe('Feature15Component7Component', () => {
  let component: Feature15Component7Component;
  let fixture: ComponentFixture<Feature15Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
