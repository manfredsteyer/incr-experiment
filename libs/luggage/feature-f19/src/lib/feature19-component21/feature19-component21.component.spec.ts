import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component21Component } from './feature19-component21.component';

describe('Feature19Component21Component', () => {
  let component: Feature19Component21Component;
  let fixture: ComponentFixture<Feature19Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
