import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component3Component } from './feature38-component3.component';

describe('Feature38Component3Component', () => {
  let component: Feature38Component3Component;
  let fixture: ComponentFixture<Feature38Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
