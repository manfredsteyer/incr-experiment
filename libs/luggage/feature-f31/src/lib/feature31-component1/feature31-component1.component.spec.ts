import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component1Component } from './feature31-component1.component';

describe('Feature31Component1Component', () => {
  let component: Feature31Component1Component;
  let fixture: ComponentFixture<Feature31Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
