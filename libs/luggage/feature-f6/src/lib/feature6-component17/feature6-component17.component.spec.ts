import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component17Component } from './feature6-component17.component';

describe('Feature6Component17Component', () => {
  let component: Feature6Component17Component;
  let fixture: ComponentFixture<Feature6Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
