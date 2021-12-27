import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component6Component } from './feature44-component6.component';

describe('Feature44Component6Component', () => {
  let component: Feature44Component6Component;
  let fixture: ComponentFixture<Feature44Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
