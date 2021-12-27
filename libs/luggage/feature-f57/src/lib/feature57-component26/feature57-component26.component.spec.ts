import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component26Component } from './feature57-component26.component';

describe('Feature57Component26Component', () => {
  let component: Feature57Component26Component;
  let fixture: ComponentFixture<Feature57Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
