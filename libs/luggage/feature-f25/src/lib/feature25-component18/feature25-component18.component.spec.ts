import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component18Component } from './feature25-component18.component';

describe('Feature25Component18Component', () => {
  let component: Feature25Component18Component;
  let fixture: ComponentFixture<Feature25Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
