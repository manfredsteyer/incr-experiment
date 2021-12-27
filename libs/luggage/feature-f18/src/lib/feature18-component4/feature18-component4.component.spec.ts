import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component4Component } from './feature18-component4.component';

describe('Feature18Component4Component', () => {
  let component: Feature18Component4Component;
  let fixture: ComponentFixture<Feature18Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
