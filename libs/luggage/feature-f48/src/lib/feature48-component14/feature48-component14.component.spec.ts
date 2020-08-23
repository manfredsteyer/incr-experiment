import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component14Component } from './feature48-component14.component';

describe('Feature48Component14Component', () => {
  let component: Feature48Component14Component;
  let fixture: ComponentFixture<Feature48Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
