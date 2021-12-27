import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component23Component } from './feature10-component23.component';

describe('Feature10Component23Component', () => {
  let component: Feature10Component23Component;
  let fixture: ComponentFixture<Feature10Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
