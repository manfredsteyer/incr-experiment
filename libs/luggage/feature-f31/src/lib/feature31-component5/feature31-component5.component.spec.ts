import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component5Component } from './feature31-component5.component';

describe('Feature31Component5Component', () => {
  let component: Feature31Component5Component;
  let fixture: ComponentFixture<Feature31Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
