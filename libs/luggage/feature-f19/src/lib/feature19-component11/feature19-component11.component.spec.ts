import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component11Component } from './feature19-component11.component';

describe('Feature19Component11Component', () => {
  let component: Feature19Component11Component;
  let fixture: ComponentFixture<Feature19Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
