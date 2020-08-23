import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component0Component } from './feature37-component0.component';

describe('Feature37Component0Component', () => {
  let component: Feature37Component0Component;
  let fixture: ComponentFixture<Feature37Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
