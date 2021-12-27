import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component3Component } from './feature58-component3.component';

describe('Feature58Component3Component', () => {
  let component: Feature58Component3Component;
  let fixture: ComponentFixture<Feature58Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
