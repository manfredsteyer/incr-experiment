import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component17Component } from './feature37-component17.component';

describe('Feature37Component17Component', () => {
  let component: Feature37Component17Component;
  let fixture: ComponentFixture<Feature37Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
