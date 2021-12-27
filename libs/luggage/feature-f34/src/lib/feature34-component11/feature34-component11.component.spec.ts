import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component11Component } from './feature34-component11.component';

describe('Feature34Component11Component', () => {
  let component: Feature34Component11Component;
  let fixture: ComponentFixture<Feature34Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
