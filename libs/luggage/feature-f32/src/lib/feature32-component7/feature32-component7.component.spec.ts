import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component7Component } from './feature32-component7.component';

describe('Feature32Component7Component', () => {
  let component: Feature32Component7Component;
  let fixture: ComponentFixture<Feature32Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
