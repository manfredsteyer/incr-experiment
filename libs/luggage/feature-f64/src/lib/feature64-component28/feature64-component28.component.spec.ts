import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component28Component } from './feature64-component28.component';

describe('Feature64Component28Component', () => {
  let component: Feature64Component28Component;
  let fixture: ComponentFixture<Feature64Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
