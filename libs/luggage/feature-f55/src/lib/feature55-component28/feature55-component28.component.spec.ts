import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component28Component } from './feature55-component28.component';

describe('Feature55Component28Component', () => {
  let component: Feature55Component28Component;
  let fixture: ComponentFixture<Feature55Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
