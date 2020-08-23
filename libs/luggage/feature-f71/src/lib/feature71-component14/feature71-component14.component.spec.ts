import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component14Component } from './feature71-component14.component';

describe('Feature71Component14Component', () => {
  let component: Feature71Component14Component;
  let fixture: ComponentFixture<Feature71Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
