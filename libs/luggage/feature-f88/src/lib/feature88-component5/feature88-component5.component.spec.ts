import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component5Component } from './feature88-component5.component';

describe('Feature88Component5Component', () => {
  let component: Feature88Component5Component;
  let fixture: ComponentFixture<Feature88Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
