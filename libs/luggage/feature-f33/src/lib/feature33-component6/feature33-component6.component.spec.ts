import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component6Component } from './feature33-component6.component';

describe('Feature33Component6Component', () => {
  let component: Feature33Component6Component;
  let fixture: ComponentFixture<Feature33Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
