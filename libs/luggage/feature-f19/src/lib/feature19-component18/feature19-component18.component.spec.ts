import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component18Component } from './feature19-component18.component';

describe('Feature19Component18Component', () => {
  let component: Feature19Component18Component;
  let fixture: ComponentFixture<Feature19Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
