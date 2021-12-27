import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component4Component } from './feature43-component4.component';

describe('Feature43Component4Component', () => {
  let component: Feature43Component4Component;
  let fixture: ComponentFixture<Feature43Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
