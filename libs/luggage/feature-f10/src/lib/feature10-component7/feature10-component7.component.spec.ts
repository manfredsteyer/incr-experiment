import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component7Component } from './feature10-component7.component';

describe('Feature10Component7Component', () => {
  let component: Feature10Component7Component;
  let fixture: ComponentFixture<Feature10Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
