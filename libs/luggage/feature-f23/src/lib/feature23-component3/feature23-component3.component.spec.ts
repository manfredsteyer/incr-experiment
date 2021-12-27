import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component3Component } from './feature23-component3.component';

describe('Feature23Component3Component', () => {
  let component: Feature23Component3Component;
  let fixture: ComponentFixture<Feature23Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
