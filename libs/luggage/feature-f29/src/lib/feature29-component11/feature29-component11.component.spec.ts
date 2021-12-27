import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component11Component } from './feature29-component11.component';

describe('Feature29Component11Component', () => {
  let component: Feature29Component11Component;
  let fixture: ComponentFixture<Feature29Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
