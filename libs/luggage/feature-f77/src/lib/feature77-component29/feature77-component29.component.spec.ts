import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component29Component } from './feature77-component29.component';

describe('Feature77Component29Component', () => {
  let component: Feature77Component29Component;
  let fixture: ComponentFixture<Feature77Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
