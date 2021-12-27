import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component7Component } from './feature19-component7.component';

describe('Feature19Component7Component', () => {
  let component: Feature19Component7Component;
  let fixture: ComponentFixture<Feature19Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
