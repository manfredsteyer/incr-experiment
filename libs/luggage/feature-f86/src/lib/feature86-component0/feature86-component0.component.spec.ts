import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component0Component } from './feature86-component0.component';

describe('Feature86Component0Component', () => {
  let component: Feature86Component0Component;
  let fixture: ComponentFixture<Feature86Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
