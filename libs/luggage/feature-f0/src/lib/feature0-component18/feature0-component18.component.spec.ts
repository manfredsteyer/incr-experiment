import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component18Component } from './feature0-component18.component';

describe('Feature0Component18Component', () => {
  let component: Feature0Component18Component;
  let fixture: ComponentFixture<Feature0Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
