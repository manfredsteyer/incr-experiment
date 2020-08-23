import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component18Component } from './feature13-component18.component';

describe('Feature13Component18Component', () => {
  let component: Feature13Component18Component;
  let fixture: ComponentFixture<Feature13Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
