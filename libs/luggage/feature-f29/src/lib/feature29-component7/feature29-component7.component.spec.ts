import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component7Component } from './feature29-component7.component';

describe('Feature29Component7Component', () => {
  let component: Feature29Component7Component;
  let fixture: ComponentFixture<Feature29Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});