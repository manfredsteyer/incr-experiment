import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component28Component } from './feature15-component28.component';

describe('Feature15Component28Component', () => {
  let component: Feature15Component28Component;
  let fixture: ComponentFixture<Feature15Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
