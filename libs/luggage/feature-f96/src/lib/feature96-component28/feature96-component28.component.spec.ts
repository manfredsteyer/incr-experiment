import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component28Component } from './feature96-component28.component';

describe('Feature96Component28Component', () => {
  let component: Feature96Component28Component;
  let fixture: ComponentFixture<Feature96Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
