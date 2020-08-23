import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component10Component } from './feature74-component10.component';

describe('Feature74Component10Component', () => {
  let component: Feature74Component10Component;
  let fixture: ComponentFixture<Feature74Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
