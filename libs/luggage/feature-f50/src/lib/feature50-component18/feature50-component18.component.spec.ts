import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component18Component } from './feature50-component18.component';

describe('Feature50Component18Component', () => {
  let component: Feature50Component18Component;
  let fixture: ComponentFixture<Feature50Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
