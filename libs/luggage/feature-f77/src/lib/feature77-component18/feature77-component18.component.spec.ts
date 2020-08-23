import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component18Component } from './feature77-component18.component';

describe('Feature77Component18Component', () => {
  let component: Feature77Component18Component;
  let fixture: ComponentFixture<Feature77Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
