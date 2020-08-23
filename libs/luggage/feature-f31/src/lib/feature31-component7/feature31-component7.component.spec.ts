import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component7Component } from './feature31-component7.component';

describe('Feature31Component7Component', () => {
  let component: Feature31Component7Component;
  let fixture: ComponentFixture<Feature31Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
