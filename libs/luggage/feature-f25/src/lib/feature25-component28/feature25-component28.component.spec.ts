import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component28Component } from './feature25-component28.component';

describe('Feature25Component28Component', () => {
  let component: Feature25Component28Component;
  let fixture: ComponentFixture<Feature25Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
