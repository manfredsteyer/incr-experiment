import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component10Component } from './feature0-component10.component';

describe('Feature0Component10Component', () => {
  let component: Feature0Component10Component;
  let fixture: ComponentFixture<Feature0Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
