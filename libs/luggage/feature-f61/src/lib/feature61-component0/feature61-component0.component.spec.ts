import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component0Component } from './feature61-component0.component';

describe('Feature61Component0Component', () => {
  let component: Feature61Component0Component;
  let fixture: ComponentFixture<Feature61Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
