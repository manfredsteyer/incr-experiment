import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component21Component } from './feature38-component21.component';

describe('Feature38Component21Component', () => {
  let component: Feature38Component21Component;
  let fixture: ComponentFixture<Feature38Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
