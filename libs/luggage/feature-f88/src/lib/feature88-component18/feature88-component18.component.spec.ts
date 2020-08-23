import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component18Component } from './feature88-component18.component';

describe('Feature88Component18Component', () => {
  let component: Feature88Component18Component;
  let fixture: ComponentFixture<Feature88Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
