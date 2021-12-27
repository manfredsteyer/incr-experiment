import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component7Component } from './feature83-component7.component';

describe('Feature83Component7Component', () => {
  let component: Feature83Component7Component;
  let fixture: ComponentFixture<Feature83Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
