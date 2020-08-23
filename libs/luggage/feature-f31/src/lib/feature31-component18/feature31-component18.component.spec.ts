import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component18Component } from './feature31-component18.component';

describe('Feature31Component18Component', () => {
  let component: Feature31Component18Component;
  let fixture: ComponentFixture<Feature31Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
