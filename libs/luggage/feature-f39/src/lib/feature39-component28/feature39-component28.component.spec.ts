import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component28Component } from './feature39-component28.component';

describe('Feature39Component28Component', () => {
  let component: Feature39Component28Component;
  let fixture: ComponentFixture<Feature39Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
