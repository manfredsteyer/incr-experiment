import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component28Component } from './feature74-component28.component';

describe('Feature74Component28Component', () => {
  let component: Feature74Component28Component;
  let fixture: ComponentFixture<Feature74Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
