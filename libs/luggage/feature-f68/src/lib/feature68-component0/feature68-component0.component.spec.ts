import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component0Component } from './feature68-component0.component';

describe('Feature68Component0Component', () => {
  let component: Feature68Component0Component;
  let fixture: ComponentFixture<Feature68Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
