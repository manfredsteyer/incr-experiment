import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component10Component } from './feature36-component10.component';

describe('Feature36Component10Component', () => {
  let component: Feature36Component10Component;
  let fixture: ComponentFixture<Feature36Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
