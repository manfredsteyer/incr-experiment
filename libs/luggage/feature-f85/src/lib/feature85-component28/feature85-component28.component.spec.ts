import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component28Component } from './feature85-component28.component';

describe('Feature85Component28Component', () => {
  let component: Feature85Component28Component;
  let fixture: ComponentFixture<Feature85Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
