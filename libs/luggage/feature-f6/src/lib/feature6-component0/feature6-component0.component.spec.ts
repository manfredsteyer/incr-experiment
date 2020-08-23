import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component0Component } from './feature6-component0.component';

describe('Feature6Component0Component', () => {
  let component: Feature6Component0Component;
  let fixture: ComponentFixture<Feature6Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
