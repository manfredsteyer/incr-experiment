import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component14Component } from './feature77-component14.component';

describe('Feature77Component14Component', () => {
  let component: Feature77Component14Component;
  let fixture: ComponentFixture<Feature77Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
