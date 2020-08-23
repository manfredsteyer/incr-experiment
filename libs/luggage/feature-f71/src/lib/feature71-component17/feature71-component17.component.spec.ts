import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component17Component } from './feature71-component17.component';

describe('Feature71Component17Component', () => {
  let component: Feature71Component17Component;
  let fixture: ComponentFixture<Feature71Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
