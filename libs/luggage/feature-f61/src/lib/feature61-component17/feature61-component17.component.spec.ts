import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component17Component } from './feature61-component17.component';

describe('Feature61Component17Component', () => {
  let component: Feature61Component17Component;
  let fixture: ComponentFixture<Feature61Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
