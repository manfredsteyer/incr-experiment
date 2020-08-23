import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component18Component } from './feature96-component18.component';

describe('Feature96Component18Component', () => {
  let component: Feature96Component18Component;
  let fixture: ComponentFixture<Feature96Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
