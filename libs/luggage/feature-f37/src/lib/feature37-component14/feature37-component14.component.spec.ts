import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component14Component } from './feature37-component14.component';

describe('Feature37Component14Component', () => {
  let component: Feature37Component14Component;
  let fixture: ComponentFixture<Feature37Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
