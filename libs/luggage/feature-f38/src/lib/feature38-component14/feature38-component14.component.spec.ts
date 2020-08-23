import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component14Component } from './feature38-component14.component';

describe('Feature38Component14Component', () => {
  let component: Feature38Component14Component;
  let fixture: ComponentFixture<Feature38Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
