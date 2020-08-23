import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component1Component } from './feature89-component1.component';

describe('Feature89Component1Component', () => {
  let component: Feature89Component1Component;
  let fixture: ComponentFixture<Feature89Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
