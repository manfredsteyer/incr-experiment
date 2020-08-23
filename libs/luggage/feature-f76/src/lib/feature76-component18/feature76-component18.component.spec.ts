import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component18Component } from './feature76-component18.component';

describe('Feature76Component18Component', () => {
  let component: Feature76Component18Component;
  let fixture: ComponentFixture<Feature76Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
