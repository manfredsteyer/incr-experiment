import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component10Component } from './feature15-component10.component';

describe('Feature15Component10Component', () => {
  let component: Feature15Component10Component;
  let fixture: ComponentFixture<Feature15Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
