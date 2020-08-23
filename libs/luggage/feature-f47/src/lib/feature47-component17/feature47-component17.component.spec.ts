import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component17Component } from './feature47-component17.component';

describe('Feature47Component17Component', () => {
  let component: Feature47Component17Component;
  let fixture: ComponentFixture<Feature47Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature47Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
