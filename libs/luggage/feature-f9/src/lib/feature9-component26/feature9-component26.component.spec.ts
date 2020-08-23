import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component26Component } from './feature9-component26.component';

describe('Feature9Component26Component', () => {
  let component: Feature9Component26Component;
  let fixture: ComponentFixture<Feature9Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
