import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component10Component } from './feature44-component10.component';

describe('Feature44Component10Component', () => {
  let component: Feature44Component10Component;
  let fixture: ComponentFixture<Feature44Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
