import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component3Component } from './feature20-component3.component';

describe('Feature20Component3Component', () => {
  let component: Feature20Component3Component;
  let fixture: ComponentFixture<Feature20Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
