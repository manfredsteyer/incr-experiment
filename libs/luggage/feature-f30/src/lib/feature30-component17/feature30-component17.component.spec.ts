import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component17Component } from './feature30-component17.component';

describe('Feature30Component17Component', () => {
  let component: Feature30Component17Component;
  let fixture: ComponentFixture<Feature30Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
