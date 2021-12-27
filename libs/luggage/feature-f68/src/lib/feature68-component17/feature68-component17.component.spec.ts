import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component17Component } from './feature68-component17.component';

describe('Feature68Component17Component', () => {
  let component: Feature68Component17Component;
  let fixture: ComponentFixture<Feature68Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
