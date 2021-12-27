import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component20Component } from './feature54-component20.component';

describe('Feature54Component20Component', () => {
  let component: Feature54Component20Component;
  let fixture: ComponentFixture<Feature54Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
