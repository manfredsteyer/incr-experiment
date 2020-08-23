import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component14Component } from './feature83-component14.component';

describe('Feature83Component14Component', () => {
  let component: Feature83Component14Component;
  let fixture: ComponentFixture<Feature83Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
