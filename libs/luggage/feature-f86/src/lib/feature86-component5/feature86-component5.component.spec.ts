import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component5Component } from './feature86-component5.component';

describe('Feature86Component5Component', () => {
  let component: Feature86Component5Component;
  let fixture: ComponentFixture<Feature86Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
