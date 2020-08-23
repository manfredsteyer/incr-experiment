import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component10Component } from './feature31-component10.component';

describe('Feature31Component10Component', () => {
  let component: Feature31Component10Component;
  let fixture: ComponentFixture<Feature31Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
