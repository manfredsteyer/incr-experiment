import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component11Component } from './feature58-component11.component';

describe('Feature58Component11Component', () => {
  let component: Feature58Component11Component;
  let fixture: ComponentFixture<Feature58Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
