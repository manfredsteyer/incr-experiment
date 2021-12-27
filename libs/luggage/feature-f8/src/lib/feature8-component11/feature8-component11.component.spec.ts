import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component11Component } from './feature8-component11.component';

describe('Feature8Component11Component', () => {
  let component: Feature8Component11Component;
  let fixture: ComponentFixture<Feature8Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
