import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component29Component } from './feature19-component29.component';

describe('Feature19Component29Component', () => {
  let component: Feature19Component29Component;
  let fixture: ComponentFixture<Feature19Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
