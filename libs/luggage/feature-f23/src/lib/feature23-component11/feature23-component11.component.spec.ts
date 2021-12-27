import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component11Component } from './feature23-component11.component';

describe('Feature23Component11Component', () => {
  let component: Feature23Component11Component;
  let fixture: ComponentFixture<Feature23Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
