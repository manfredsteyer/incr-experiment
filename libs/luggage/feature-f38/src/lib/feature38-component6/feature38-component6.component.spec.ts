import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component6Component } from './feature38-component6.component';

describe('Feature38Component6Component', () => {
  let component: Feature38Component6Component;
  let fixture: ComponentFixture<Feature38Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
