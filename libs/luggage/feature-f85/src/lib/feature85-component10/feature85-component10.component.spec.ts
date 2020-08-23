import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component10Component } from './feature85-component10.component';

describe('Feature85Component10Component', () => {
  let component: Feature85Component10Component;
  let fixture: ComponentFixture<Feature85Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
