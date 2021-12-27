import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component11Component } from './feature6-component11.component';

describe('Feature6Component11Component', () => {
  let component: Feature6Component11Component;
  let fixture: ComponentFixture<Feature6Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
