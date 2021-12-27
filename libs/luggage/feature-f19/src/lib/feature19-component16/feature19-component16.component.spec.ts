import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component16Component } from './feature19-component16.component';

describe('Feature19Component16Component', () => {
  let component: Feature19Component16Component;
  let fixture: ComponentFixture<Feature19Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
