import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component10Component } from './feature88-component10.component';

describe('Feature88Component10Component', () => {
  let component: Feature88Component10Component;
  let fixture: ComponentFixture<Feature88Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
