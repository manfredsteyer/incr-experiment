import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component6Component } from './feature96-component6.component';

describe('Feature96Component6Component', () => {
  let component: Feature96Component6Component;
  let fixture: ComponentFixture<Feature96Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
