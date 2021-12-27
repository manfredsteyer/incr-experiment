import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component8Component } from './feature19-component8.component';

describe('Feature19Component8Component', () => {
  let component: Feature19Component8Component;
  let fixture: ComponentFixture<Feature19Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
