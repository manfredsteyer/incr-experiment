import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component28Component } from './feature94-component28.component';

describe('Feature94Component28Component', () => {
  let component: Feature94Component28Component;
  let fixture: ComponentFixture<Feature94Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
