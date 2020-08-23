import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component18Component } from './feature72-component18.component';

describe('Feature72Component18Component', () => {
  let component: Feature72Component18Component;
  let fixture: ComponentFixture<Feature72Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
