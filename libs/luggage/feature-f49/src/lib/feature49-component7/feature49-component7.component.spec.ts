import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component7Component } from './feature49-component7.component';

describe('Feature49Component7Component', () => {
  let component: Feature49Component7Component;
  let fixture: ComponentFixture<Feature49Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
