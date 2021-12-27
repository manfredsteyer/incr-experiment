import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component6Component } from './feature31-component6.component';

describe('Feature31Component6Component', () => {
  let component: Feature31Component6Component;
  let fixture: ComponentFixture<Feature31Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
