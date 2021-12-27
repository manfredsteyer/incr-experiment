import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component7Component } from './feature40-component7.component';

describe('Feature40Component7Component', () => {
  let component: Feature40Component7Component;
  let fixture: ComponentFixture<Feature40Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
