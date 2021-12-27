import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component6Component } from './feature77-component6.component';

describe('Feature77Component6Component', () => {
  let component: Feature77Component6Component;
  let fixture: ComponentFixture<Feature77Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
