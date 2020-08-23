import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component18Component } from './feature8-component18.component';

describe('Feature8Component18Component', () => {
  let component: Feature8Component18Component;
  let fixture: ComponentFixture<Feature8Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
