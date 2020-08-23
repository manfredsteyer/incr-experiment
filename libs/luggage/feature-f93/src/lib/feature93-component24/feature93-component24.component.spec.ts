import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component24Component } from './feature93-component24.component';

describe('Feature93Component24Component', () => {
  let component: Feature93Component24Component;
  let fixture: ComponentFixture<Feature93Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
