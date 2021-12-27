import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component23Component } from './feature69-component23.component';

describe('Feature69Component23Component', () => {
  let component: Feature69Component23Component;
  let fixture: ComponentFixture<Feature69Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
