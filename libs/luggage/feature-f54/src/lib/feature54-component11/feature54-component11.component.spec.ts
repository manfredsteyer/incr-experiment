import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component11Component } from './feature54-component11.component';

describe('Feature54Component11Component', () => {
  let component: Feature54Component11Component;
  let fixture: ComponentFixture<Feature54Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
