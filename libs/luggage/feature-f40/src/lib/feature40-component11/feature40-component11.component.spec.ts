import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component11Component } from './feature40-component11.component';

describe('Feature40Component11Component', () => {
  let component: Feature40Component11Component;
  let fixture: ComponentFixture<Feature40Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
