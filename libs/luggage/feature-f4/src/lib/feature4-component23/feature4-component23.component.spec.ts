import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component23Component } from './feature4-component23.component';

describe('Feature4Component23Component', () => {
  let component: Feature4Component23Component;
  let fixture: ComponentFixture<Feature4Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
