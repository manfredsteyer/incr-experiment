import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component24Component } from './feature54-component24.component';

describe('Feature54Component24Component', () => {
  let component: Feature54Component24Component;
  let fixture: ComponentFixture<Feature54Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
