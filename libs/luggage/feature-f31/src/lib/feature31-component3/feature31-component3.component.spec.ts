import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component3Component } from './feature31-component3.component';

describe('Feature31Component3Component', () => {
  let component: Feature31Component3Component;
  let fixture: ComponentFixture<Feature31Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
