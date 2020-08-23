import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component26Component } from './feature77-component26.component';

describe('Feature77Component26Component', () => {
  let component: Feature77Component26Component;
  let fixture: ComponentFixture<Feature77Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
