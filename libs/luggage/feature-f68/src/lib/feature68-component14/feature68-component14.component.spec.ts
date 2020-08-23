import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component14Component } from './feature68-component14.component';

describe('Feature68Component14Component', () => {
  let component: Feature68Component14Component;
  let fixture: ComponentFixture<Feature68Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
