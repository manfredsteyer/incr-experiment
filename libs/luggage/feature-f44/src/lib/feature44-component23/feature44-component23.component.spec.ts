import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component23Component } from './feature44-component23.component';

describe('Feature44Component23Component', () => {
  let component: Feature44Component23Component;
  let fixture: ComponentFixture<Feature44Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
