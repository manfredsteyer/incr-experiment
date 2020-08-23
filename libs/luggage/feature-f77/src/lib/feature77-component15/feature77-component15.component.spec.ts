import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component15Component } from './feature77-component15.component';

describe('Feature77Component15Component', () => {
  let component: Feature77Component15Component;
  let fixture: ComponentFixture<Feature77Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
