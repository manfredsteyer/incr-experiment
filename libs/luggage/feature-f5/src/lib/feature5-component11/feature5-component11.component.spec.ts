import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component11Component } from './feature5-component11.component';

describe('Feature5Component11Component', () => {
  let component: Feature5Component11Component;
  let fixture: ComponentFixture<Feature5Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
