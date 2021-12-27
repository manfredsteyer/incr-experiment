import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component26Component } from './feature18-component26.component';

describe('Feature18Component26Component', () => {
  let component: Feature18Component26Component;
  let fixture: ComponentFixture<Feature18Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
