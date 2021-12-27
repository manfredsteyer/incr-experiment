import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component26Component } from './feature43-component26.component';

describe('Feature43Component26Component', () => {
  let component: Feature43Component26Component;
  let fixture: ComponentFixture<Feature43Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
