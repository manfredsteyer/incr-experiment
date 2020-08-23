import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component24Component } from './feature75-component24.component';

describe('Feature75Component24Component', () => {
  let component: Feature75Component24Component;
  let fixture: ComponentFixture<Feature75Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
