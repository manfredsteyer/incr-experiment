import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component14Component } from './feature32-component14.component';

describe('Feature32Component14Component', () => {
  let component: Feature32Component14Component;
  let fixture: ComponentFixture<Feature32Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
