import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component3Component } from './feature19-component3.component';

describe('Feature19Component3Component', () => {
  let component: Feature19Component3Component;
  let fixture: ComponentFixture<Feature19Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
