import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component0Component } from './feature49-component0.component';

describe('Feature49Component0Component', () => {
  let component: Feature49Component0Component;
  let fixture: ComponentFixture<Feature49Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
