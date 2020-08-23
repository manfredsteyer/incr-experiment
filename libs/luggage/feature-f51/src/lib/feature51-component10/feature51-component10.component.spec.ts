import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component10Component } from './feature51-component10.component';

describe('Feature51Component10Component', () => {
  let component: Feature51Component10Component;
  let fixture: ComponentFixture<Feature51Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
