import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component11Component } from './feature10-component11.component';

describe('Feature10Component11Component', () => {
  let component: Feature10Component11Component;
  let fixture: ComponentFixture<Feature10Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
