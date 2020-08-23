import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component14Component } from './feature54-component14.component';

describe('Feature54Component14Component', () => {
  let component: Feature54Component14Component;
  let fixture: ComponentFixture<Feature54Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
