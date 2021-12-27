import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component6Component } from './feature73-component6.component';

describe('Feature73Component6Component', () => {
  let component: Feature73Component6Component;
  let fixture: ComponentFixture<Feature73Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
