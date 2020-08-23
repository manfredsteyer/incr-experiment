import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component17Component } from './feature19-component17.component';

describe('Feature19Component17Component', () => {
  let component: Feature19Component17Component;
  let fixture: ComponentFixture<Feature19Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
