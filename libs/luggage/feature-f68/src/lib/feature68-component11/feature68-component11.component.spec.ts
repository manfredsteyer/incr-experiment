import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component11Component } from './feature68-component11.component';

describe('Feature68Component11Component', () => {
  let component: Feature68Component11Component;
  let fixture: ComponentFixture<Feature68Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
