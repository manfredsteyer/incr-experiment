import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component3Component } from './feature89-component3.component';

describe('Feature89Component3Component', () => {
  let component: Feature89Component3Component;
  let fixture: ComponentFixture<Feature89Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
