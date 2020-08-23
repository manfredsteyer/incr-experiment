import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component5Component } from './feature21-component5.component';

describe('Feature21Component5Component', () => {
  let component: Feature21Component5Component;
  let fixture: ComponentFixture<Feature21Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
