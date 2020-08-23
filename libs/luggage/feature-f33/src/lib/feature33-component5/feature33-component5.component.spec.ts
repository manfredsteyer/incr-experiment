import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component5Component } from './feature33-component5.component';

describe('Feature33Component5Component', () => {
  let component: Feature33Component5Component;
  let fixture: ComponentFixture<Feature33Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
