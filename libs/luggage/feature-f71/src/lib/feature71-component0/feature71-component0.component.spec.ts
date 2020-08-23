import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component0Component } from './feature71-component0.component';

describe('Feature71Component0Component', () => {
  let component: Feature71Component0Component;
  let fixture: ComponentFixture<Feature71Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
