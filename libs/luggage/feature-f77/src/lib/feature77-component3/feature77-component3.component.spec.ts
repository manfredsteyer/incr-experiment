import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component3Component } from './feature77-component3.component';

describe('Feature77Component3Component', () => {
  let component: Feature77Component3Component;
  let fixture: ComponentFixture<Feature77Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
