import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component18Component } from './feature46-component18.component';

describe('Feature46Component18Component', () => {
  let component: Feature46Component18Component;
  let fixture: ComponentFixture<Feature46Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
