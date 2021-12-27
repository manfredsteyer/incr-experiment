import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component26Component } from './feature14-component26.component';

describe('Feature14Component26Component', () => {
  let component: Feature14Component26Component;
  let fixture: ComponentFixture<Feature14Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
