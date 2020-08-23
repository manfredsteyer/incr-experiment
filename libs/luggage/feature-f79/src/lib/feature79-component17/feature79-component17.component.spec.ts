import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component17Component } from './feature79-component17.component';

describe('Feature79Component17Component', () => {
  let component: Feature79Component17Component;
  let fixture: ComponentFixture<Feature79Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
