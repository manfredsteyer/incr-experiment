import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component15Component } from './feature11-component15.component';

describe('Feature11Component15Component', () => {
  let component: Feature11Component15Component;
  let fixture: ComponentFixture<Feature11Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
