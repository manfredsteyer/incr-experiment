import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component28Component } from './feature91-component28.component';

describe('Feature91Component28Component', () => {
  let component: Feature91Component28Component;
  let fixture: ComponentFixture<Feature91Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
