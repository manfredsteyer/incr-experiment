import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component0Component } from './feature53-component0.component';

describe('Feature53Component0Component', () => {
  let component: Feature53Component0Component;
  let fixture: ComponentFixture<Feature53Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
