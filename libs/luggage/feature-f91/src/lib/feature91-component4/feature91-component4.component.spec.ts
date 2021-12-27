import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component4Component } from './feature91-component4.component';

describe('Feature91Component4Component', () => {
  let component: Feature91Component4Component;
  let fixture: ComponentFixture<Feature91Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
