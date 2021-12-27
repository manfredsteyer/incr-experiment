import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component29Component } from './feature53-component29.component';

describe('Feature53Component29Component', () => {
  let component: Feature53Component29Component;
  let fixture: ComponentFixture<Feature53Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
