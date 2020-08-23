import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component28Component } from './feature51-component28.component';

describe('Feature51Component28Component', () => {
  let component: Feature51Component28Component;
  let fixture: ComponentFixture<Feature51Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
