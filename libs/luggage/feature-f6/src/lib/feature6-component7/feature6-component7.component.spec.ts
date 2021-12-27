import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component7Component } from './feature6-component7.component';

describe('Feature6Component7Component', () => {
  let component: Feature6Component7Component;
  let fixture: ComponentFixture<Feature6Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
