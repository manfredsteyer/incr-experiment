import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component8Component } from './feature31-component8.component';

describe('Feature31Component8Component', () => {
  let component: Feature31Component8Component;
  let fixture: ComponentFixture<Feature31Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
