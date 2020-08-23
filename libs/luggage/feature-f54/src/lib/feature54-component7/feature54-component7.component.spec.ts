import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component7Component } from './feature54-component7.component';

describe('Feature54Component7Component', () => {
  let component: Feature54Component7Component;
  let fixture: ComponentFixture<Feature54Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
