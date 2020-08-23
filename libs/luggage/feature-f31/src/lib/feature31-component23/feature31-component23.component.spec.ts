import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component23Component } from './feature31-component23.component';

describe('Feature31Component23Component', () => {
  let component: Feature31Component23Component;
  let fixture: ComponentFixture<Feature31Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
