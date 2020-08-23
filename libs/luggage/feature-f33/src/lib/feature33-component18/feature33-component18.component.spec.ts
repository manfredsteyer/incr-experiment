import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component18Component } from './feature33-component18.component';

describe('Feature33Component18Component', () => {
  let component: Feature33Component18Component;
  let fixture: ComponentFixture<Feature33Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
