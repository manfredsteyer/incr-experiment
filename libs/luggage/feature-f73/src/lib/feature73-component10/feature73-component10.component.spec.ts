import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component10Component } from './feature73-component10.component';

describe('Feature73Component10Component', () => {
  let component: Feature73Component10Component;
  let fixture: ComponentFixture<Feature73Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
