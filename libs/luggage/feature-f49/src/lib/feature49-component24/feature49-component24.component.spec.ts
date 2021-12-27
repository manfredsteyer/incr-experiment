import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component24Component } from './feature49-component24.component';

describe('Feature49Component24Component', () => {
  let component: Feature49Component24Component;
  let fixture: ComponentFixture<Feature49Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
