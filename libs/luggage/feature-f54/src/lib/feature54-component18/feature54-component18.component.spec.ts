import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component18Component } from './feature54-component18.component';

describe('Feature54Component18Component', () => {
  let component: Feature54Component18Component;
  let fixture: ComponentFixture<Feature54Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
