import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component17Component } from './feature5-component17.component';

describe('Feature5Component17Component', () => {
  let component: Feature5Component17Component;
  let fixture: ComponentFixture<Feature5Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
