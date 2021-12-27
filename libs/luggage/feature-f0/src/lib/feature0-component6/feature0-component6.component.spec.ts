import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component6Component } from './feature0-component6.component';

describe('Feature0Component6Component', () => {
  let component: Feature0Component6Component;
  let fixture: ComponentFixture<Feature0Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
