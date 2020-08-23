import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component10Component } from './feature25-component10.component';

describe('Feature25Component10Component', () => {
  let component: Feature25Component10Component;
  let fixture: ComponentFixture<Feature25Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
