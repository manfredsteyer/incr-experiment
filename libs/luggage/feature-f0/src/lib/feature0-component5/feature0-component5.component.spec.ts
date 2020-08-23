import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component5Component } from './feature0-component5.component';

describe('Feature0Component5Component', () => {
  let component: Feature0Component5Component;
  let fixture: ComponentFixture<Feature0Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
