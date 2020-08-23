import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component17Component } from './feature53-component17.component';

describe('Feature53Component17Component', () => {
  let component: Feature53Component17Component;
  let fixture: ComponentFixture<Feature53Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
