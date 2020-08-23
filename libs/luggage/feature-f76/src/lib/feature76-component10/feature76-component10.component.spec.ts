import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component10Component } from './feature76-component10.component';

describe('Feature76Component10Component', () => {
  let component: Feature76Component10Component;
  let fixture: ComponentFixture<Feature76Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
