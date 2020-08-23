import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component28Component } from './feature95-component28.component';

describe('Feature95Component28Component', () => {
  let component: Feature95Component28Component;
  let fixture: ComponentFixture<Feature95Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
