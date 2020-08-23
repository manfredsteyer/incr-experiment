import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component14Component } from './feature7-component14.component';

describe('Feature7Component14Component', () => {
  let component: Feature7Component14Component;
  let fixture: ComponentFixture<Feature7Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
