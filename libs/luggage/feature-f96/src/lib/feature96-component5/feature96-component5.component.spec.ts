import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component5Component } from './feature96-component5.component';

describe('Feature96Component5Component', () => {
  let component: Feature96Component5Component;
  let fixture: ComponentFixture<Feature96Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
