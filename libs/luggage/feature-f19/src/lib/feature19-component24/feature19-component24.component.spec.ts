import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component24Component } from './feature19-component24.component';

describe('Feature19Component24Component', () => {
  let component: Feature19Component24Component;
  let fixture: ComponentFixture<Feature19Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
