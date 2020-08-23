import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component18Component } from './feature73-component18.component';

describe('Feature73Component18Component', () => {
  let component: Feature73Component18Component;
  let fixture: ComponentFixture<Feature73Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
