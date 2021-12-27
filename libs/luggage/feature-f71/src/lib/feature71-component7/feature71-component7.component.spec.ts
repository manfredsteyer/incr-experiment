import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component7Component } from './feature71-component7.component';

describe('Feature71Component7Component', () => {
  let component: Feature71Component7Component;
  let fixture: ComponentFixture<Feature71Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
