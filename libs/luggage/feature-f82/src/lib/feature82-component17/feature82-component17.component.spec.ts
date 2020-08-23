import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component17Component } from './feature82-component17.component';

describe('Feature82Component17Component', () => {
  let component: Feature82Component17Component;
  let fixture: ComponentFixture<Feature82Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
