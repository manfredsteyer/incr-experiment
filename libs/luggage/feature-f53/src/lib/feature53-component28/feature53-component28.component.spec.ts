import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component28Component } from './feature53-component28.component';

describe('Feature53Component28Component', () => {
  let component: Feature53Component28Component;
  let fixture: ComponentFixture<Feature53Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
