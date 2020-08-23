import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component5Component } from './feature43-component5.component';

describe('Feature43Component5Component', () => {
  let component: Feature43Component5Component;
  let fixture: ComponentFixture<Feature43Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
