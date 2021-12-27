import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component3Component } from './feature54-component3.component';

describe('Feature54Component3Component', () => {
  let component: Feature54Component3Component;
  let fixture: ComponentFixture<Feature54Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
