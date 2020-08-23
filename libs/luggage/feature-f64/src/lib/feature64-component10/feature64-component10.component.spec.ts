import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component10Component } from './feature64-component10.component';

describe('Feature64Component10Component', () => {
  let component: Feature64Component10Component;
  let fixture: ComponentFixture<Feature64Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
