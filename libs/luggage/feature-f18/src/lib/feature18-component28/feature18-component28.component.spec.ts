import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component28Component } from './feature18-component28.component';

describe('Feature18Component28Component', () => {
  let component: Feature18Component28Component;
  let fixture: ComponentFixture<Feature18Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
