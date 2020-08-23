import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component7Component } from './feature44-component7.component';

describe('Feature44Component7Component', () => {
  let component: Feature44Component7Component;
  let fixture: ComponentFixture<Feature44Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
