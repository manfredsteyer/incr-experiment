import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component24Component } from './feature38-component24.component';

describe('Feature38Component24Component', () => {
  let component: Feature38Component24Component;
  let fixture: ComponentFixture<Feature38Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
