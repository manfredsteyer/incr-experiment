import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component3Component } from './feature39-component3.component';

describe('Feature39Component3Component', () => {
  let component: Feature39Component3Component;
  let fixture: ComponentFixture<Feature39Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
