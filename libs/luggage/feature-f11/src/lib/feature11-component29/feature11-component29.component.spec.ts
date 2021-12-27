import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component29Component } from './feature11-component29.component';

describe('Feature11Component29Component', () => {
  let component: Feature11Component29Component;
  let fixture: ComponentFixture<Feature11Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
