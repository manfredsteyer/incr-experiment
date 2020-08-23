import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component20Component } from './feature89-component20.component';

describe('Feature89Component20Component', () => {
  let component: Feature89Component20Component;
  let fixture: ComponentFixture<Feature89Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
