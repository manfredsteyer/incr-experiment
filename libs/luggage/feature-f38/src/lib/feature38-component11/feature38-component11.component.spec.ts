import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component11Component } from './feature38-component11.component';

describe('Feature38Component11Component', () => {
  let component: Feature38Component11Component;
  let fixture: ComponentFixture<Feature38Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
