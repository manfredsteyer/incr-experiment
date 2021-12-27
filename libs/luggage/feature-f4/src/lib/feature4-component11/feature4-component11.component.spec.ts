import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component11Component } from './feature4-component11.component';

describe('Feature4Component11Component', () => {
  let component: Feature4Component11Component;
  let fixture: ComponentFixture<Feature4Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
