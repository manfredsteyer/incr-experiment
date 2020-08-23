import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component13Component } from './feature89-component13.component';

describe('Feature89Component13Component', () => {
  let component: Feature89Component13Component;
  let fixture: ComponentFixture<Feature89Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
