import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component24Component } from './feature83-component24.component';

describe('Feature83Component24Component', () => {
  let component: Feature83Component24Component;
  let fixture: ComponentFixture<Feature83Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
