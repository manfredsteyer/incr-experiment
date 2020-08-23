import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component14Component } from './feature6-component14.component';

describe('Feature6Component14Component', () => {
  let component: Feature6Component14Component;
  let fixture: ComponentFixture<Feature6Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
