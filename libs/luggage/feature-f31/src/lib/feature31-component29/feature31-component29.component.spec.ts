import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component29Component } from './feature31-component29.component';

describe('Feature31Component29Component', () => {
  let component: Feature31Component29Component;
  let fixture: ComponentFixture<Feature31Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
