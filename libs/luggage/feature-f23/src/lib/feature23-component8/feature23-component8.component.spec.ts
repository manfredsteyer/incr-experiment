import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component8Component } from './feature23-component8.component';

describe('Feature23Component8Component', () => {
  let component: Feature23Component8Component;
  let fixture: ComponentFixture<Feature23Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
