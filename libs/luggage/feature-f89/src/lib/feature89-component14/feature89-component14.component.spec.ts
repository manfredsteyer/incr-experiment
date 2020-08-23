import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component14Component } from './feature89-component14.component';

describe('Feature89Component14Component', () => {
  let component: Feature89Component14Component;
  let fixture: ComponentFixture<Feature89Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
