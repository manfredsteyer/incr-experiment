import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component17Component } from './feature26-component17.component';

describe('Feature26Component17Component', () => {
  let component: Feature26Component17Component;
  let fixture: ComponentFixture<Feature26Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
