import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component7Component } from './feature38-component7.component';

describe('Feature38Component7Component', () => {
  let component: Feature38Component7Component;
  let fixture: ComponentFixture<Feature38Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
