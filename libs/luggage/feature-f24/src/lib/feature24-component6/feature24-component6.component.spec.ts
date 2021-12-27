import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component6Component } from './feature24-component6.component';

describe('Feature24Component6Component', () => {
  let component: Feature24Component6Component;
  let fixture: ComponentFixture<Feature24Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
