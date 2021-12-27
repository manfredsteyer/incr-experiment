import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component5Component } from './feature7-component5.component';

describe('Feature7Component5Component', () => {
  let component: Feature7Component5Component;
  let fixture: ComponentFixture<Feature7Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
