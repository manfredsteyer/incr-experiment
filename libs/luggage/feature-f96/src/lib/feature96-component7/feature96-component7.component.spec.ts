import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component7Component } from './feature96-component7.component';

describe('Feature96Component7Component', () => {
  let component: Feature96Component7Component;
  let fixture: ComponentFixture<Feature96Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
