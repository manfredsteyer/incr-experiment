import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component15Component } from './feature89-component15.component';

describe('Feature89Component15Component', () => {
  let component: Feature89Component15Component;
  let fixture: ComponentFixture<Feature89Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
