import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component5Component } from './feature53-component5.component';

describe('Feature53Component5Component', () => {
  let component: Feature53Component5Component;
  let fixture: ComponentFixture<Feature53Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
