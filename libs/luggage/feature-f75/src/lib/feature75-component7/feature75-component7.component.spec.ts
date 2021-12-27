import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component7Component } from './feature75-component7.component';

describe('Feature75Component7Component', () => {
  let component: Feature75Component7Component;
  let fixture: ComponentFixture<Feature75Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
