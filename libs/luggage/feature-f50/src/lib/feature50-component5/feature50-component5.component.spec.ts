import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component5Component } from './feature50-component5.component';

describe('Feature50Component5Component', () => {
  let component: Feature50Component5Component;
  let fixture: ComponentFixture<Feature50Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
