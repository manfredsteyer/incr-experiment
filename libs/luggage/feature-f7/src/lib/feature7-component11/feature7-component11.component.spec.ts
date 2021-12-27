import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component11Component } from './feature7-component11.component';

describe('Feature7Component11Component', () => {
  let component: Feature7Component11Component;
  let fixture: ComponentFixture<Feature7Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
