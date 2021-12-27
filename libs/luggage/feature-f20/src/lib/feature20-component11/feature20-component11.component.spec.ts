import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component11Component } from './feature20-component11.component';

describe('Feature20Component11Component', () => {
  let component: Feature20Component11Component;
  let fixture: ComponentFixture<Feature20Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
