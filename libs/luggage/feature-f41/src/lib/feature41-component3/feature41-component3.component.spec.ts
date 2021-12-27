import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component3Component } from './feature41-component3.component';

describe('Feature41Component3Component', () => {
  let component: Feature41Component3Component;
  let fixture: ComponentFixture<Feature41Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
