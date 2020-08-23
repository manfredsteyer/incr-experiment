import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component24Component } from './feature40-component24.component';

describe('Feature40Component24Component', () => {
  let component: Feature40Component24Component;
  let fixture: ComponentFixture<Feature40Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
