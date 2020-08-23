import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component18Component } from './feature10-component18.component';

describe('Feature10Component18Component', () => {
  let component: Feature10Component18Component;
  let fixture: ComponentFixture<Feature10Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
