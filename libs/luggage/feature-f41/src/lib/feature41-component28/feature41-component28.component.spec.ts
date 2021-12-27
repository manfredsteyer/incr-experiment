import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component28Component } from './feature41-component28.component';

describe('Feature41Component28Component', () => {
  let component: Feature41Component28Component;
  let fixture: ComponentFixture<Feature41Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
