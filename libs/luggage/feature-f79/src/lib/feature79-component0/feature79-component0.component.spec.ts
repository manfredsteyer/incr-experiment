import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component0Component } from './feature79-component0.component';

describe('Feature79Component0Component', () => {
  let component: Feature79Component0Component;
  let fixture: ComponentFixture<Feature79Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
