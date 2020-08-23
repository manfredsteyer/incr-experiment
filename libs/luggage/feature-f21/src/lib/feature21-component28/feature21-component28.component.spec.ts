import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component28Component } from './feature21-component28.component';

describe('Feature21Component28Component', () => {
  let component: Feature21Component28Component;
  let fixture: ComponentFixture<Feature21Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
