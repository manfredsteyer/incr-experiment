import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component23Component } from './feature89-component23.component';

describe('Feature89Component23Component', () => {
  let component: Feature89Component23Component;
  let fixture: ComponentFixture<Feature89Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
