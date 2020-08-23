import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component24Component } from './feature20-component24.component';

describe('Feature20Component24Component', () => {
  let component: Feature20Component24Component;
  let fixture: ComponentFixture<Feature20Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
