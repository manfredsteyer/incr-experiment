import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component4Component } from './feature57-component4.component';

describe('Feature57Component4Component', () => {
  let component: Feature57Component4Component;
  let fixture: ComponentFixture<Feature57Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
