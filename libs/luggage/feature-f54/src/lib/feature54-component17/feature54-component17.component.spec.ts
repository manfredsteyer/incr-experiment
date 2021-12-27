import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component17Component } from './feature54-component17.component';

describe('Feature54Component17Component', () => {
  let component: Feature54Component17Component;
  let fixture: ComponentFixture<Feature54Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
